@dashboard
Feature: Check Dashboard functionality

  Background:
    Given user navigates to the login page

  Scenario: Check a user can add himself to the dashboard
    When user is logged in the application
    And a new member is created
    And user navigates to the dashboard page
    Then the total members counter should be 1
    And the user is deleted

  Scenario: Check the dashboard is showing the total members section
    When user is logged in the application
    And a new member is created
    And user navigates to the dashboard page
    Then the total members section is displayed


  Scenario: Check the dashboard is showing top sources section
    When user is logged in the application
    And a new member is created
    And user navigates to the dashboard page
    And the top sources section is displayed


  Scenario: Check the dashboard is showing engagement section
    When user is logged in the application
    And a new member is created
    And user navigates to the dashboard page
    And the engagement section is displayed


  Scenario: Check the dashboard is showing recent post section
    When user is logged in the application
    And a new member is created
    And user navigates to the dashboard page
    And the recent posts section is displayed

