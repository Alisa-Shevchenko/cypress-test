import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200/",
    retries: {
      openMode: 1,
      runMode: 1
    },
    watchForFileChanges: false,
    viewportHeight: 1200,
    viewportWidth: 1200,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

