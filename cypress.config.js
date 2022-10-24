const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ga-ecomm-demo-test.netlify.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
