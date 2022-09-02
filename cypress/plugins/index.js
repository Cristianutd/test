/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const fs = require("fs-extra");
const path = require("path");
const cucumber = require("cypress-cucumber-preprocessor").default;
const AllureWriter = require("@shelex/cypress-allure-plugin/writer");
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  require("cypress-mochawesome-reporter/plugin")(on);
  on("file:preprocessor", cucumber());
  AllureWriter(on, config);

  require("cypress-grep/src/plugin")(config);
  const file = "env-config";
  const conf = getConfigurationByFile(file);
  const url = process.env.CYPRESS_BASE_URL;
  if (url !== undefined) {
    conf.baseUrl = process.env.CYPRESS_BASE_URL;
  }
  return conf;
};

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(".", "config", `${file}.json`);
  return fs.readJson(pathToConfigFile);
}
