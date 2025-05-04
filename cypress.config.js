const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://homologlogin.cpb.org.br/realms/cpb/protocol/openid-connect/auth?client_id=cadastro-web&redirect_uri=https%3A%2F%2Fhomolognovocadastro.cpb.org.br%2F&state=fc2c4f2c-a28a-4be6-8218-f231734b1162&response_mode=fragment&response_type=code&scope=openid&nonce=a1c2c1cd-2a9a-4c19-989d-222bf2d06d67',
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotOnRunFailure: false,
    experimentalRunAllSpecs: true,    
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);

      return config;
    },
    projectId: "jmfdv7",
  },
  env: {
    allure: true,
  }
});
