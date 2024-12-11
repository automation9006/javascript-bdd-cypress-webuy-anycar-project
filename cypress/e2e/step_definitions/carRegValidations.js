import {  Given,  When,  Then,} from "@badeball/cypress-cucumber-preprocessor"
import homePageObject from "../../pages/homePageObject"
import homePageLocators from "cypress/locators/homePageLocators"

When(`enter car reg details`, (table) => {
    table.hashes().forEach(row => {
        homePageObject.searchCarRegDetails(row.carreg,row.miles)
    
    })
})
    
Then(`validate car brand and model details`, (table) => {
    table.hashes().forEach(row => {
        homePageObject.validateCarDetails(row.manfactname,row.modelname,row.year)
        
    })
  })

  Then(`validate error message {string}`, (errorMessage) => {
    cy.xpath(homePageLocators.TEXT_NO_REGFOUND).should('have.text', errorMessage)
        
     
    
  })