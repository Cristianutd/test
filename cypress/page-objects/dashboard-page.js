

const dashboardLocators = {
  addMembersLink: ".gh-dashboard-zero-message > :nth-child(4)",
  newMemberButton: "a[href='#/members/new/']",
  membersCounter: ".gh-dashboard-box > .gh-dashboard-metric > .gh-dashboard-metric-data > .gh-dashboard-metric-value > .value",
  dashboardLink: "a[href='#/dashboard/']",
  totalMembersSectionLabel: ".gh-dashboard-metric-label",
  topSourcesSectionLabel: ".gh-dashboard-metric-label",
  engagementSectionLabel: "gh-dashboard-metric-label",
  recentPostSectionLabel: "gh-dashboard-metric-label",
  membersLink: "a[href='#/members/']",
  member: "//tr[1]"
};


export class dashboardPage {

  navigateToMemberDetails(){
    cy.xpath(dashboardLocators.member).last().click()
  }
  navigateToAddMember() {
    cy.get(dashboardLocators.addMembersLink).click()
  }

  navigateToMembers(){
    cy.get(dashboardLocators.membersLink).first().click()
  }

  clickNewMemberButton() {
    cy.get(dashboardLocators.newMemberButton).first().click()
  }

  verifyNumberOfMembers(numberOfMembers) {
    // cy.get(dashboardLocators.membersCounter).contains(numberOfMembers)
    cy.get(dashboardLocators.membersCounter).should('have.text', numberOfMembers)
  }

  navigateToDashboard() {
    cy.get(dashboardLocators.dashboardLink).first().click()
  }

  verifyTotalMembersSection() {
    cy.get(dashboardLocators.totalMembersSectionLabel).contains("Total members")
  };

  verifyTopSourcesSection() {
    cy.get(dashboardLocators.topSourcesSectionLabel).contains("Top sources")
  };

  verifyEngagementSection() {
    cy.get(dashboardLocators.engagementSectionLabel).contains("Engagement")
  };

  verifyRecentPostSection() {
    cy.get(dashboardLocators.recentPostSectionLabel).contains("Recent posts")
  };

}





