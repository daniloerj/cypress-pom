import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://practicetestautomation.com',
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: false,
  },
});
