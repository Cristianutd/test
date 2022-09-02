@api-tests
@power-plants
@regression
Feature: Verify List of Powerplants API

  Scenario: The list of Power Plants should be a list/array
    When user sends GET request to the "searchPowerPlants" endpoint
    Then the body response should be a list or array