import URL from "../support/AppUrls";


const loginLocators = {
  emailTextBox: "#identification",
  passwordTextBox: "#password",
  signInButton: "#ember7",
};

export class loginPage {
  goToLoginPage() {
    cy.visit(URL.LandingPageUrl);
  }

  login() {
    cy.get(loginLocators.emailTextBox).type(URL.user)
    cy.get(loginLocators.passwordTextBox).type(URL.password)
    cy.get(loginLocators.signInButton).click()
  }
}