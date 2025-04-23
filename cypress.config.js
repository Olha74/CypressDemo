const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '17821b',
  projektId: '17821b',
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,
  videoCompression: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  reporter: 'cypress-mochawesome-reporter',
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    }
  },
});

