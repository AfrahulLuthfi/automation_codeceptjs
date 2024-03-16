const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
require('dotenv').config();
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'testCase/*.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: process.env.url,
      waitForNavigation: ["domcontentloaded","networkidle0"],
      show: true,
      windowSize: '1920x1080',
      chrome:{
        args:[
        "--start-maximized",
        "--cast-initial-screen-width",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--incognito",
        ],
        defaultViewPort: null,
      },
      restart: false,
      keepCookies: true,
      keepBrowserState: true,
    },
    "FileSystem": {},
  },
  include: {
  I: './steps_file.js'
  },
  plugins: {
  stepByStepReport: {
  enabled: true,
  deleteSuccessful: false,
  ignoreSteps: [
  "waitForText*",
  "grabTextFrom*",
  "grabTextFromAll*",
  "waitForElement*",
  "grabNumberOfVisibleElements*",
  "handleDownloads*",
  "amInPath*",
  "grabFileNames*",
  "refreshPage*",
  "scrollTo*",
  "grabHTMLFrom*",
  "wait*",
  "click*",
  "pressKey*",
  "attachFile*",
  "grabValueFrom*",
  "grabCurrentUrl*",
  "moveCursorTo*",
  "type*",
  "seeElement*",
  "grabCookie*",
  "setCookie*"
  ],
  screenshotsForAllureReport: true,
  fullPageScreenshots: true,
  disableScreenshotOnFail: false,
},
  allure: {
  enabled: true,
  require: '@codeceptjs/allure-legacy',
  },
},
  name: 'automation codeceptjs'
}
