Test Automation Framework - Cypress
=====

##Instructions
Below you will find the list of commands you need to run in order to install all the dependencies required to run the automated tests.

#
Install Node
brew install node

Install Yarn
brew install yarn

Install Cypress
yarn add cypress@9.7.0 --dev

Install Allure reports
brew install allure


##How to run the tests
There are 2 ways of running the test cases.

* The first one is by using the Cypress dashboard and then clicking on each file that contains the automated test cases:\

Run test with Cypress Console
yarn cypress open

Then you will see a Cypress window with the list of automated test cases available.

The second way to run the automated	test cases is by console (make sure you are in the root path of the test automation framework and then run any of the following commands according to your preferences:\

Run all tests (UI and API)
yarn cy:regression

Run only API tests
yarn cy:api-tests

Run only UI tests
yarn cy:ui-tests
Finally run the below command in order to see the detailed execution report:

Generate Report
yarn allure:report
