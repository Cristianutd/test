import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { loginPage } from "../../../page-objects/login-page";

const loginPageObj = new loginPage();

Given(/^user navigates to the login page$/, function () {
  loginPageObj.goToLoginPage();
});

When(/^user is logged in the application$/, function () {
    loginPageObj.login();
    cy.wait(5000)
});
