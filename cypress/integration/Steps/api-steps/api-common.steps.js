import { Then, When } from "cypress-cucumber-preprocessor/steps";
import { STATUS_CODE } from "../../../support/Apis/api-const";
import {
  generateRandomID,
  getApiByName,
} from "../../../support/Apis/api-helper";
import { formatString } from "../../../support/CustomHelpers/general-helper";
import API from "../../../support/ApiUrls";

Then(/^the response status code is (\d+)$/, function (code) {
  cy.get("@request").verifyResponseStatusCode(STATUS_CODE.OK);
});

Then(
  /^the response body is validated by "(.+)" schema$/,
  function (pathToSchema) {
    cy.get("@request").then((resp) => {
      cy.validateSchema(pathToSchema, resp.body);
    });
  }
);

When(/^user sends GET request to the "(.+)" endpoint$/, function (endpoint) {
  cy.request({
    method: "GET",
    url: API.BaseURL + getApiByName(endpoint),
    headers: { Token: API.Token },
  }).as("request");
});

When(
  /^user sends GET request to the "(.+)" endpoint with random ID$/,
  function (endpoint) {
    let idFromAPI;
    let numberOfPlants;
    cy.request({
      method: "GET",
      url: API.BaseURL + getApiByName("searchPowerPlants"),
      headers: { Token: API.Token },
    })
      .as("request")
      .then((response) => {
        numberOfPlants = response.body.length;
        idFromAPI = response.body[generateRandomID(0, numberOfPlants - 1)].id;
        let partialUrl = getApiByName(endpoint);
        let finalUrl =
          API.BaseURL + formatString(partialUrl, { powerPlantID: idFromAPI });
        cy.request({
          method: "GET",
          url: finalUrl,
          headers: { Token: API.Token },
        }).as("request");
      });
  }
);

When(
  /^user sends GET request to the "([^"]*)" endpoint with (.*) parameter$/,
  function (endpoint, state) {
    cy.request({
      method: "GET",
      url: API.BaseURL + getApiByName(endpoint) + state + "/percentage",
      headers: { Token: API.Token },
    }).as("request");
  }
);

When(
  /^user sends GET request to the "([^"]*)" endpoint with (.*)$/,
  function (endpoint, state) {
    let partialUrl = getApiByName(endpoint);
    let finalUrl = API.BaseURL + formatString(partialUrl, { state: state });
    cy.request({
      method: "GET",
      url: finalUrl,
      headers: { Token: API.Token },
    }).as("request");
  }
);

Then(/^the body response should be a list or array$/, function () {
  cy.get("@request").then((response) => {
    expect(response.body).to.be.a("array");
  });
});
