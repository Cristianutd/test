@api-tests
@health-check
@regression
Feature:  Verify APIs are returning correct HTTP status codes

  Scenario: The 'Search all power plants' API is returning correct status code
    When user sends GET request to the "searchPowerPlants" endpoint
    Then the response status code is 200

  Scenario: The 'Search top N power plants' API is returning correct status code
    When user sends GET request to the "topSearchPowerPlants" endpoint
    Then the response status code is 200

  Scenario: The 'Gives the details of a power plant' API is returning correct status code
    When user sends GET request to the "powerPlantsByID" endpoint with random ID
    Then the response status code is 200

  Scenario Outline: The 'Search power plants in a state' API is returning correct status code
    When user sends GET request to the "powerPlantsByState" endpoint with <state>
    Then the response status code is 200
    Examples:
      | state |
      | TX    |
      | SD    |
      | NE    |

  Scenario Outline: The 'Search actual and percentage of plant's federal state' API is returning correct status code
    When user sends GET request to the "searchPowerPlants" endpoint with <state> parameter
    Then the response status code is 200
    Examples:
      | state |
      | TX    |
      | SD    |
      | NE    |

  Scenario: The 'Provide array of unique states' API is returning correct status code
    When user sends GET request to the "states" endpoint
    Then the response status code is 200