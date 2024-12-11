# cypress-cucumber-boilerplate-for-e2e-testing

<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQF1dg2KtKFdPg/company-logo_200_200/0/1626295436859?e=2159024400&v=beta&t=Ib_T9PXXQxkHRKnj3Oe65EKuR6EAh01IgAA6IGvU0FY" alt="exemplo imagem">

> Cypress 10+ with Cucumber boilerplate project.

### 💻 Topics

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://www.npmjs.com/package/multiple-cucumber-html-reporter
- [x] https://github.com/cucumber/json-formatter
- [x] https://github.com/Shelex/cypress-allure-plugin

(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pre-requisites

1. Node JS
2. Optional: Java 8 for Allure Reporter
3. Optional: Json-formatter for Native Reporter option(depends on your OS: https://github.com/cucumber/json-formatter)

## 🚀 Install the project

Install project dependencies with: npm i

## Run the tests:

1. Standard Execution: npm run cypress:execution
2. run a specific test by feature name `npx cypress run --headed --browser chrome --spec cypress/e2e/features/carRegValidations.feature`
3. run all features by base features repo `npx cypress run --headed --browser chrome --spec cypress/e2e/features/*`
4. run all tests by tags `npx cypress run --headed --browser chrome --env tags=@regression`
5. run all tests by generating allure reports `npx cypress run --headed --browser chrome --env allure=true`
6. command to clear all the screenshots and reports `rm -r allure-results/ allure-report cypress/screenshots || true`
7. generate allurereports `allure generate allure-results --clean -o allure-report`
8. remove allure reports history `mv -f allure-report/history allure-results/history && rm -r allure-report || true`

9. Reference fpr Native report(with JSON FORMATTER): Check how to do it in this video: [Cucumber BDD Report - YouTube](https://www.youtube.com/watch?v=5AGXK9cL2fs&t=2s&ab_channel=JoanMedia)


   ## run the tests on docker container

Below command pulls the latest image with cypress dependencies

-- winpty docker pull cypress/included:latest

Below command checks the current image setup ( on windows OS)

-- winpty docker images

Below command is to check image with all browsers available in docker container ( on windows OS)

-- winpty docker run -it --entrypoint=cypress cypress/included info

Below command to run the tests on docker container ( on windows OS)

-- winpty docker run -it -v $PWD:/e2e -w /e2e cypress/included --spec cypress/e2e/integration/lumaUiTests/*.js --browser chrome

or
winpty docker run -it -v $PWD://workspace/cypress-test-automation-bdd/cypress/e2e/ -w //workspace/cypress-test-automation-bdd/cypress/e2e/ cypress/included

## BrowserStack Integration Steps
1. Installation in repository: npm install -g browserstack-cypress-cli
2. Create Json file of browserstack through: browserstack-cypress init
3. Update the browserstack.json using standard configurations. (Example:https://www.browserstack.com/docs/automate/cypress)   
4. Run the tests in browserstack: browserstack-cypress run 



##  Sample repo to generate an allure report as an artifact using GH Actions

* https://github.com/SeyiOG/newCyLearn2/blob/main/.github/workflows/cypress-allure-report.yml

