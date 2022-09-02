@ui-tests
@regression
Feature: Check Power Plants Map functionality

  Background:
    Given user navigates to the landing page

  Scenario: Check if the map is displayed
    Then user can see the maps properly

  Scenario: Check if by default 200 power plants are displayed
    When user can see the maps properly
    Then the map is displaying "200" power plants

  Scenario Outline: Check if the slider is working properly
    When user can see the maps properly
    And the slider is set to show <numberOfLocations> power plants
    Then the map is displaying <numberOfLocations> power plants
    And the map title is updated with the <numberOfLocations> power plants
    Examples:
      | numberOfLocations |
      | 1                 |
      | 100               |
      | 150               |
      | 150               |
      | 234               |
      | 376               |
      | 410               |
      | 572               |
      | 681               |
      | 727               |
      | 846               |
      | 936               |
      | 1000              |

  Scenario Outline: Check that after filter power plants by state the map is updated
    When user filters by <state>
    Then all the power plants belongs to <state>
    Examples:
      | state |
      | NE    |
      | CA    |
      | NE    |
      | TN    |
      | SD    |
