const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
   screenshotsFolder: "./cypress/snapshots/actual/cypress/e2e",
  trashAssetsBeforeRuns: true,
  video: false,
  e2e: {
     baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-html-reporter/GenerateReport')(on, config)

    },
    env: {
    MY_ENV: process.env.MY_ENV,
    },

  },    
});
