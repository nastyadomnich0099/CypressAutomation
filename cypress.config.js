const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  env:{
    url : "https://rahulshettyacademy.com"
    
  },
  retries:{
    runMode:1
  },
  projectId: '2nmp82',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js',
    screenshotsFolder: 'cypress/failures/screenshots'
  },
});
