const { defineConfig } = require("cypress");
require('dotenv').config()
const getCompareSnapshotsPlugin = require("cypress-lens/dist/plugin");

module.exports = defineConfig({
   screenshotsFolder: "./cypress/snapshots/actual/cypress/e2e",
  trashAssetsBeforeRuns: true,
  video: false,
  e2e: {
     baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      // implement node event listeners here

      require('cypress-html-reporter/GenerateReport')(on, config)

    },
    env: {
    MY_ENV: process.env.MY_ENV,
    ebacStoreVersion: "v1",
    failSilently: false,
    SNAPSHOT_BASE_DIRECTORY: "./cypress/snapshots/base/cypress/e2e",
    SNAPSHOT_DIFF_DIRECTORY: "./cypress/snapshots/diff/cypress/e2e"
    },

    reporter: 'cypress-lens',
    reporterOptions: {

    }
  },    
  //reporter: 'mochawesome',
 // reporterOptions: {
  //  reportFileName: "[name]-result",
   // html: false
  //}
});
