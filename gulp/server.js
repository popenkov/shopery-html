import gulp from "gulp";
import browserSync from "browser-sync";
import path from "path";
import fs from "fs";

import { config } from "./config.js";
import { calcGraph } from "./calcGraph.js";
import { pagesCollector } from "./utils/pagesCollector.js";
import { writePugMixinsFile } from "./writePugMixinsFile.js";
import { writeSassImportsFile } from "./writeSassImportsFile.js";
import { writeJsRequiresFile } from "./writeJsRequiresFile.js";
import { compilePug, compilePugFast, recompilePug } from "./compilePug.js";
import { compileSass } from "./compileSass.js";
import { compileJs } from "./compileJs.js";
import { compileJson } from "./compileJson.js";
import { copySources, copyBlockImg } from "./copySources.js";
import { generateSvgSprite } from "./generateSvgSprite.js";

const { watch, series, parallel } = gulp;

export function server() {
  browserSync.init(config.serverOptions);

  // Pages: change, add
  watch(
    [`${config.from.pages}/**/*.pug`],
    { events: ["change", "add"], delay: 100 },
    series(calcGraph, compilePugFast, reload),
  );

  // Pages: unlink
  watch([`${config.from.pages}/**/*.pug`], { delay: 100 }).on("unlink", function (filepath) {
    let filePathInBuildDir = filepath
      .replace(`${config.from.root}/pages/`, config.to.pages)
      .replace(".pug", ".html");
    fs.unlink(filePathInBuildDir, (err) => {
      if (err) throw err;
      console.log(`---------- Delete:  ${filePathInBuildDir}`);
    });
    calcGraph();
  });

  // Blocks: change
  const blocksWatcher = watch([`${config.from.blocks}/**/*.pug`], { delay: 100 });
  blocksWatcher.on("change", function (filepath) {
    const rebuildPages = pagesCollector(filepath);
    console.log(`---------- Block added/changed: ${path.basename(filepath, ".pug")}`);
    if (rebuildPages.length) {
      calcGraph();
      compilePug(rebuildPages);
      browserSync.reload();
    }
  });

  // Blocks: add
  blocksWatcher.on("add", function (filepath) {
    const rebuildPages = pagesCollector(filepath);
    writePugMixinsFile(() => {});
    if (rebuildPages.length) {
      calcGraph();
      compilePug(rebuildPages);
      browserSync.reload();
    }
  });

  // Blocks: unlink
  watch(
    [`${config.from.blocks}/**/*.pug`],
    { events: ["unlink"], delay: 100 },
    series(calcGraph, writePugMixinsFile),
  );

  // Templates
  const templatesWatcher = watch(
    [`${config.from.templates}/**/*.pug`, `!${config.from.templates}/mixins.pug`],
    { delay: 100 },
  );

  // Templates: change
  templatesWatcher.on("change", function (filepath) {
    const rebuildPages = pagesCollector(filepath);
    if (rebuildPages.length) {
      calcGraph();
      compilePug(rebuildPages.toString());
      parallel(writeSassImportsFile, writeJsRequiresFile);
      parallel(compileSass, compileJs);
      browserSync.reload();
    }
  });

  // Blocks style: change
  watch(
    [`${config.from.blocks}/**/*.scss`],
    { events: ["change"], delay: 100 },
    series(compileSass),
  );

  // Blocks style: add
  watch(
    [`${config.from.blocks}/**/*.scss`],
    { events: ["add"], delay: 100 },
    series(writeSassImportsFile, compileSass),
  );

  // Global styles: all
  watch(
    [`${config.from.style}/**/*.scss`, `!${config.from.style}/style.scss`],
    { events: ["all"], delay: 100 },
    series(compileSass),
  );

  // Global scripts: all
  watch(
    [`${config.from.js}/**/*.js`, `!${config.from.js}/entry.js`, `!${config.from.js}/head-script.js`, `${config.from.blocks}/**/*.js`],
    {
      events: ["all"],
      delay: 100,
    },
    series(writeJsRequiresFile, compileJs, reload),
  );

  // Included scripts: all
  watch(
    [`${config.from.js}/head-script.js`],
    {
      events: ["all"],
      delay: 100,
    },
    series(calcGraph, recompilePug, reload)
  );

  // Copy sources: all
  watch(
    [
      `${config.from.img}/**/*.{${config.fileFormats}}`,
      `${config.from.img}/favicon/**/*.*`,
      `${config.from.fonts}/**/*.*`,
      `${config.from.assets}/**/*.*`,
    ],
    { events: ["all"], delay: 100 },
    series(copySources, reload),
  );

  // Copy images: all
  watch(
    [`${config.from.blocks}/**/img/**/*.{${config.fileFormats}}`],
    { events: ["all"], delay: 100 },
    series(copyBlockImg, reload),
  );

  // SVG sprites: all
  watch(
    [
      `${config.from.symbols}/*.svg`,
      `${config.from.symbols}/svgAsBg.xml`,
      `${config.from.blocks}/**/symbols/**/*.svg`,
    ],
    { events: ["all"], delay: 100 },
    series(generateSvgSprite, reload),
  );

  // JSON: all
  watch(
    [`${config.from.data}/**/*.json`],
    { events: ["all"], delay: 100 },
    series(compileJson, recompilePug, reload),
  );
}

function reload(done) {
  browserSync.reload();
  done();
}
