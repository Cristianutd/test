// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// import './commands'
// import '@testing-library/cypress/add-commands';
require("cypress-grep")();
require("cypress-xpath");
import "cypress-mochawesome-reporter/register";


// Alternatively you can use CommonJS syntax:
// require('./commands')
// before(function(){
//     let url = (Cypress.config().baseUrl)
//     cy.visit(url)
// })g

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});
