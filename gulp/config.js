const pathToPrefix = ``;
const pathPugPrefix = ``;

const fromObj = {
  root: "src",
  get pages() {
    return `${this.root}/pages`;
  },
  get templates() {
    return `${this.root}/templates`;
  },
  get blocks() {
    return `${this.root}/blocks`;
  },
  get style() {
    return `${this.root}/scss`;
  },
  get js() {
    return `${this.root}/js`;
  },
  get img() {
    return `${this.root}/img`;
  },
  get assets() {
    return `${this.root}/assets`;
  },
  get fonts() {
    return `${this.root}/fonts`;
  },
  get data() {
    return `${this.root}/data`;
  },
  get json() {
    return `${this.root}/json`;
  },
  get symbols() {
    return `${this.root}/symbols`;
  },
};

const toObj = {
  root: "build",
  get pages() {
    return `${this.root}/${pathToPrefix}/`;
  },
  get style() {
    return `${this.root}/${pathToPrefix}/css`;
  },
  get js() {
    return `${this.root}/${pathToPrefix}/js`;
  },
  get img() {
    return `${this.root}/${pathToPrefix}/img`;
  },
  get assets() {
    return `${this.root}/${pathToPrefix}/assets`;
  },
  get fonts() {
    return `${this.root}/${pathToPrefix}/fonts`;
  },
};

const sourcesObj = {
  "src/img/**/*.*": toObj.img,
  "src/favicon/**/*.*": toObj.img + "/favicon",
  "src/assets/**/*.*": toObj.assets,
  "src/fonts/**/*.*": toObj.fonts,
  // "node_modules/somePackage/images/*.{png,svg,jpg,jpeg}": toObj.img,
};

export const config = {
  // base graph
  graph: {
    templates: {},
    blocks: {},
  },
  // where we get the sources from
  from: fromObj,
  // where we put the built project
  to: toObj,
  // paths for markup
  paths: {
    js: `${pathPugPrefix}/js/`,
    css: `${pathPugPrefix}/css/`,
    img: `${pathPugPrefix}/img/`,
    fonts: `${pathPugPrefix}/fonts/`,
    pages: `/`,
    get icon() {
      return `${this.img}svgSprite.svg#`;
    },
  },
  // sources for copy
  sources: sourcesObj,
  // file format for copy
  fileFormats: `png,jpg,jpeg,svg,gif,webp`,
  // excluded blocks
  notGetBlocks: [],
  // ignored blocks
  ignoredBlocks: ["no-js", "content-filler"],
  // always added blocks
  alwaysAddBlocks: [],
  // virtual blocks list
  blocksFromHtml: [],
  // style imports at start
  addStyleBefore: [
    "sanitize.css/sanitize.css",
    "sanitize.css/forms.css",
    "sanitize.css/assets.css",
    "sanitize.css/typography.css",
    "sanitize.css/reduce-motion.css",
    "src/scss/variables.scss",
    "src/scss/reboot.scss",
    // "src/scss/mixins.scss",
    // "src/scss/typography.scss",
    // "src/scss/vendor.scss",
    "src/scss/fonts.scss",
    // "src/scss/animations.scss"
    // "somePackage/dist/somePackage.css", // для "node_modules/somePackage/dist/somePackage.css",
  ],
  // style imports at end
  addStyleAfter: [],
  // js imports at start
  addJsBefore: [
    // "somePackage/dist/somePackage.js", // для "node_modules/somePackage/dist/somePackage.js",
  ],
  // js imports at end
  addJsAfter: [
    "./script.js",
  ],
  // browserSync options
  serverOptions: {
    server: toObj.root,
    host: "192.168.1.39",
    logPrefix: "dev-server",
    port: 3000,
    startPath: "index.html",
    open: false,
    notify: true,
  },
  // pretty-html options
  prettyOption: {
    indent_size: 2,
    indent_char: " ",
    indent_inner_html: true,
    extra_liners: [],
    preserve_newlines: true,
    unformatted: ["code", "em", "strong", "span", "i", "b", "br", "script", "pre"],
  },
  // px to rem properties
  pxToRem: ["font", "font-size", "line-height", "letter-spacing"],
  // message
  doNotEditMsg:
    "\n ВНИМАНИЕ! Этот файл генерируется автоматически.\n Любые изменения этого файла будут потеряны при следующей компиляции.\n Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.\n\n",
  // regexp
  classRegexp: /(?<!(=|!=|[({]|include|extends).+)((\.|\B\+)[a-zA-Z0-9-_]+)+?|(class=["']?([\w\-_ ]+)+["']?)/g,
  blockRegexp: /[^\\/]+(?=\.[^.])/g,
  templateRegexp: /(?<=extends.*templates\/).*.pug/g,
  // env
  mode: process.env.MODE || "development",
  // img copy mode
  isSeparatedBlockImg: "collected", // [false, true, "collected"]
  // log
  logging: false
};
