const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ga-demo.dhdev.co/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
