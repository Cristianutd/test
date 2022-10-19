**Test Automation Framework - Cypress**
====

**Installation Instructions**
=
Below you will find the list of commands you need to run in order to install all the dependencies to run the automated tests. It is important to run all the commands in the root path of the project.

- Install Node: `brew install node`

- Install Yarn: `brew install yarn`

- Install Cypress: `yarn add cypress@9.7.0 --dev`

- Install Allure reports: `brew install allure`


**How to run the tests**
=
There are 2 ways of running the test cases (make sure you are in the root path of the test automation framework).

1. By using the _Cypress Dashboard_ and then clicking on each file that contains the automated test cases:

    - `yarn cypress open`

Then you will see a Cypress window with the list of automated test cases available. 


2. By console, run any of the following commands according to your preferences:

- Run all tests (UI and API): `yarn cy:regression`

- Run only API tests: `yarn cy:api-tests`

- Run only UI tests: `yarn cy:ui-tests`


Finally run the below command in order to see the detailed execution report:

- Generate Report: `yarn allure:report`



**JMeter - Finding API Bottlenecks**
=
In order to find any perfomance issues such as bottleneck, I would follow the below topics in order to ensure the test are well designed and provide the right output about the application:

- First of all, I need to know the production environment and the test environment were the test will be run.
- Understand hardware details and network configurations.
- Identify the performance acceptance criteria, as every type of business and application have different requirements.

However, I have create an small performance test suite using JMeter and I have run some local tests using the following metrics:

- **Number of threads:** 40
- **Ramp-up period:** 1 second
- **Loop Count:** 15

The results were 'acceptable' as follows:

- **3000 API request to each endpoint**
- **Average response time 261.2 miliseconds**
- **No packages lost**

Nevertheless, the results cannot confirm the application is free of bottlenecks as the tests must be performed in a real environment, closer to the production environment.

**How to run the JMeter tests**
=

- Install JMeter: `brew install jmeter`

- Now in the console, type: `which jmeter`

- Copy the output, type: `cd` and paste the output from the previous step. (It should looks like `cd /usr/local/bin/jmeter`)

- To open JMeter, type `jmeter`

Finally you can import the following project that contains the implemented [JMeter load tests](https://gitlab.com/cris7ian/jmeter-us-power-plants/-/blob/main/us-power-plants.jmx).



**Requirements Review Documentation**
=

In the following [link](https://gitlab.com/cris7ian/us-power-plants-requirementsreview/-/blob/main/RequirementsReview.xlsx) you will find and excel file with findings and comments regarding the application according to the requiremients.
