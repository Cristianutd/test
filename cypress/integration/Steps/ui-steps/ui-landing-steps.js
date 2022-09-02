import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { landingPage } from "../../../page-objects/landing-page";

const landingPageObj = new landingPage();

Then(/^user can see the maps properly$/, function () {
  landingPageObj.verifyMapIsDisplayed();
});

Then(
  /^the map is displaying "([^"]*)" power plants$/,
  function (numberOfLocations) {
    landingPageObj.verifyPowerPlants(numberOfLocations);
  }
);

Then(/^the map is displaying (.*) power plants$/, function (numberOfLocations) {
  landingPageObj.verifyPowerPlants(numberOfLocations);
});

And(
  /^the slider is set to show (.*) power plants$/,
  function (numberOfLocations) {
    landingPageObj.setSliderTo(numberOfLocations);
  }
);

Given(/^user navigates to the landing page$/, function () {
  landingPageObj.goToLandingPage();
});

Then(
  /^the map title is updated with the (.*) power plants$/,
  function (numberOfLocations) {
    landingPageObj.verifyMapTitle(numberOfLocations);
  }
);

When(/^user filters by (.*)$/, function (state) {
  landingPageObj.filterByState(state);
});

Then(/^all the power plants belongs to (.*)$/, function (state) {
  landingPageObj.ValidatePlantsByState(state);
});
