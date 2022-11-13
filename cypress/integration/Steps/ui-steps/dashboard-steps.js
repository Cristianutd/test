import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import {dashboardPage} from "../../../page-objects/dashboard-page";
import {membersPage} from "../../../page-objects/members-page";

const dashboardPageObj = new dashboardPage();
const membersPageObj = new membersPage();


When(/^a new member is created$/, function () {
    dashboardPageObj.navigateToAddMember();
    dashboardPageObj.clickNewMemberButton();
    membersPageObj.enterMemberName();
    membersPageObj.enterEmail();
    membersPageObj.clickSaveButton()
});


Then(
  /^the total members counter should be (.*)/,
  function (numberofMembers) {
    dashboardPageObj.verifyNumberOfMembers(numberofMembers);
  }
);

And(
    /^user navigates to the dashboard page$/,
    function () {
        dashboardPageObj.navigateToDashboard();
    }
);

Then(/^the total members section is displayed$/, function () {
        dashboardPageObj.verifyTotalMembersSection();
});

Then(/^the top sources section is displayed$/, function () {
        dashboardPageObj.verifyTopSourcesSection();
});

When(/^the engagement section is displayed$/, function () {
    dashboardPageObj.verifyEngagementSection();
});
When(/^the recent posts section is displayed$/, function () {
    dashboardPageObj.verifyRecentPostSection();
});

And(
    /^the user is deleted$/,
    function () {
        dashboardPageObj.navigateToMembers();
        dashboardPageObj.navigateToMemberDetails();
    }
);