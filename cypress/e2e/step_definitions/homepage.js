import {  Given,  When,  Then,} from "@badeball/cypress-cucumber-preprocessor"
import homePageObject from "../../pages/homePageObject"
import homePageLocators from "cypress/locators/homePageLocators"

Given(`A user has access to home page`, () => {
    homePageObject.openHomePage()
})

Then(`home page elements are validated`, () => {
    cy.get(homePageLocators.INPUT_SEARCH_MILEAGE).should('be.visible')
    cy.xpath(homePageLocators.INPUT_SEARCH_CAR_REG2).should('be.visible')
    cy.get(homePageLocators.BUTTON_GO).should('be.visible')
    cy.get(homePageLocators.TOP_NAV).then((element)=>{
      expect(element).to.have.length(4)})
})