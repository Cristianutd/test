@api-tests
@validate-schemas
@regression
Feature:  Verify APIs are returning the correct response by validating its schema

  Scenario: The 'Search all power plants' API response has the correct json schema
    When user sends GET request to the "searchPowerPlants" endpoint
    Then the response body is validated by "searchPowerPlants.json" schema

  Scenario: The 'Search top N power plants' API response has the correct json schema
    When user sends GET request to the "topSearchPowerPlants" endpoint
    Then the response body is validated by "topSearchPowerPlants.json" schema

  Scenario: The 'Gives the details of a power plant' API response has the correct json schema
    When user sends GET request to the "powerPlantsByID" endpoint with random ID
    Then the response body is validated by "powerPlantsByID.json" schema

  Scenario Outline: The 'Search power plants in a state' API response has the correct json schema
    When user sends GET request to the "powerPlantsByState" endpoint with <state>
    Then the response body is validated by "powerPlantsByState.json" schema
    Examples:
      | state |
      | NE    |

  Scenario Outline: The 'Search actual and percentage of plant's federal state' API response has the correct json schema
    When user sends GET request to the "searchPowerPlants" endpoint with <state> parameter
    Then the response body is validated by "powerPlantsPercentage.json" schema
    Examples:
      | state |
      | SD    |

  Scenario: The 'Provide array of unique states' API response has the correct json schema
    When user sends GET request to the "states" endpoint
    Then the response body is validated by "states.json" schema