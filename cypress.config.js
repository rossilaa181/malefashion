const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseURL: "http://127.0.0.1:8000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
