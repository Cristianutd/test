import URL from "../support/AppUrls";
import API from "../support/ApiUrls";
import { formatString } from "../support/CustomHelpers/general-helper";
import TIMEOUTS from "../support/CustomHelpers/timeouts";
import assertions from "../support/CustomHelpers/assertions";

const landingLocators = {
  map: ".leaflet-container",
  locations: ".leaflet-marker-icon",
  mapSlider: "input[type=range]",
  mapTitle: "h3",
  stateDropdown: "select",
};

export class landingPage {
  goToLandingPage() {
    cy.visit(URL.LandingPageUrl);
    cy.wait(TIMEOUTS.SHORT);
  }

  verifyMapIsDisplayed() {
    cy.get(landingLocators.map).should(assertions.visible);
  }

  verifyPowerPlants(numberOfLocations) {
    cy.get(landingLocators.locations).should("have.length", numberOfLocations);
  }

  setSliderTo(numberOfLocations) {
    cy.get(landingLocators.mapSlider)
      .then(($el) => $el[0].stepUp(numberOfLocations - 200))
      .trigger("change", { bubbles: true });
  }

  verifyMapTitle(numberOfLocations) {
    cy.get(landingLocators.mapTitle).contains(
      numberOfLocations + " Power Plants were found!"
    );
  }

  filterByState(state) {
    cy.get(landingLocators.stateDropdown).select(state);
  }

  ValidatePlantsByState(state) {
    cy.request({
      method: "GET",
      url: API.BaseURL + formatString(API.apiStates, { stateName: state }),
      headers: { Token: API.Token },
    })
      .as("request")
      .then((response) => {
        cy.get("@request")
          .its("body")
          .should((items) => {
            expect(items.map((i) => i.state)).to.include(state);
          });
      });
  }
}
