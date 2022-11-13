

const membersLocators = {
  memberNameTextBox: "#member-name",
  emailTextBox: "#member-email",
  saveButton: ".gh-btn-primary"
};



export class membersPage {

  enterMemberName() {
    cy.get(membersLocators.memberNameTextBox).type("name", {force: true})
  }

  enterEmail(){
    cy.get(membersLocators.emailTextBox).type("user@email.com")
  }

  clickSaveButton(){
    cy.get(membersLocators.saveButton).click()
    cy.wait(3000)
  }


}

