"use strict";

// Block files generator
// Use: node new.js [block name] [add. space-separated expansions ([scss] pug js md img assets symbols)]

import fs from "fs";
import { mkdirp } from "mkdirp";
import { config } from "./gulp/config.js";

const { from: dir } = config;

const blockName = process.argv[2];
const defaultExtensions = ["scss"];
const extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));

if (blockName) {
  const dirPath = `${dir.blocks}/${blockName}/`;
  if (fileExist(dirPath) === false) {
    mkdirp.sync(dirPath);
    console.log(`[MSG] Папка создана: ${dirPath}`);
  } else {
    console.log(`[MSG] Папка НЕ создана: ${dirPath} (уже существует) `);
  }

  extensions.forEach((extension) => {
    const filePath = `${dirPath + blockName}.${extension}`;
    let fileContent = "";
    let fileCreateMsg = "";

    if (extension === "scss") {
      fileContent = `@use "../../scss/breakpoints";
@use "../../scss/mixins/text-styles";

.${blockName} {
  $block-name: &; // #{$block-name}__element
}
`;
    } else if (extension === "js") {
      fileContent = `import ready from "../../js/utils/documentReady.js";

ready(function () {
  console.log("${blockName} script is working");
});
`;
    } else if (extension === "md") {
      fileContent = "";
    } else if (extension === "pug") {
      fileContent = `//- Все примеси в этом файле должны начинаться c имени блока (${blockName})
//- Упоминание имени блока в классах обязательно, без этого он не попадёт
//- в сборку

mixin ${blockName}(mods)

  //- Принимает:
  //-   mods    {string} - список модификаторов
  //- Вызов:
        +${blockName}("some-mod")

  //- список модификаторов
  -
    var allMods = "";
    if (typeof (mods) !== "undefined" && mods) {
      var modsList = mods.split(",");
      for (var i = 0; i < modsList.length; i++) {
        allMods = allMods + " ${blockName}--" + modsList[i].trim();
      }
    }

  .${blockName}(class=allMods)&attributes(attributes)
    .${blockName}__inner
      block
`;
    } else if (extension === "img") {
      const imgFolder = `${dirPath}img/`;
      if (fileExist(imgFolder) === false) {
        mkdirp.sync(imgFolder);
        console.log(`[MSG] Папка создана: ${imgFolder}`);
      } else {
        console.log(`[MSG] Папка НЕ создана: ${imgFolder} (уже существует) `);
      }
    } else if (extension === "assets") {
      const imgFolder = `${dirPath}assets/`;
      if (fileExist(imgFolder) === false) {
        mkdirp.sync(imgFolder);
        console.log(`[MSG] Папка создана: ${imgFolder}`);
      } else {
        console.log(`[MSG] Папка НЕ создана: ${imgFolder} (уже существует) `);
      }
    } else if (extension === "symbols") {
      const symbolsFolder = `${dirPath}symbols/`;
      if (fileExist(symbolsFolder) === false) {
        mkdirp.sync(symbolsFolder);
        console.log(`[MSG] Папка создана: ${symbolsFolder}`);
      } else {
        console.log(`[MSG] Папка НЕ создана: ${symbolsFolder} (уже существует) `);
      }
    }

    if (fileExist(filePath) === false && extension !== "img" && extension !== "assets" && extension !== "symbols") {
      fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
          return console.log(`[MSG] Файл НЕ создан: ${err}`);
        }
        console.log(`[MSG] Файл создан: ${filePath}`);
        if (fileCreateMsg) {
          console.warn(fileCreateMsg);
        }
      });
    } else if (extension !== "img" && extension !== "assets" && extension !== "symbols") {
      console.log(`[MSG] Файл НЕ создан: ${filePath} (уже существует)`);
    } else if (extension === "md") {
      fs.writeFile(`${dirPath}readme.md`, fileContent, (err) => {
        if (err) {
          return console.log(`[MSG] Файл НЕ создан: ${err}`);
        }
        console.log(`[MSG] Файл создан: ${dirPath}readme.md`);
        if (fileCreateMsg) {
          console.warn(fileCreateMsg);
        }
      });
    }
  });
} else {
  console.log("[MSG] Отмена операции: не указан блок");
}

function uniqueArray(arr) {
  const objectTemp = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    objectTemp[str] = true;
  }
  return Object.keys(objectTemp);
}

function fileExist(path) {
  try {
    fs.statSync(path);
  } catch (err) {
    return !(err && err.code === "ENOENT");
  }
}
