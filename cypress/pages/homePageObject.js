import homePageLocators from '../locators/homePageLocators'

const HomePageObject ={

    openHomePage(){
      cy.visit('/')
      cy.get('body');
      cy.viewport(window.screen.width, window.screen.height);
      cy.title().should('eq', 'Sell your car in under an hour | Buy my car | webuyanycar')
      cy.get(homePageLocators.BUTTON_ACCEPT_COOKIES).click()
      cy.scrollTo(0, 500)
    },

    searchCarRegDetails(carreg,miles){
      cy.scrollTo(0, 500)
      cy.xpath(homePageLocators.INPUT_SEARCH_CAR_REG2).type(carreg)
      cy.get(homePageLocators.INPUT_SEARCH_MILEAGE).type(miles)
      cy.get(homePageLocators.BUTTON_GO).click({ multiple: true, force: true })
    },

    validateCarDetails(manfactname,modelname,year){
      cy.xpath(homePageLocators.TEXT_MANUFACT_NAME).should('be.visible')
      cy.xpath(homePageLocators.TEXT_MODEL_NAME).should('be.visible')
      cy.xpath(homePageLocators.TEXT_YEAR).should('be.visible')
      cy.xpath(homePageLocators.TEXT_MANUFACT_NAME).should('have.text', manfactname)
      cy.xpath(homePageLocators.TEXT_MODEL_NAME).should('contain', modelname)
      cy.xpath(homePageLocators.TEXT_YEAR).then((element)=>{
        expect(element.text()).to.equal( year);
      })
    }
  }
  export default HomePageObject