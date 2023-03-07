
describe('should see a single beer with all itts onformation', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v2/beers/1', {fixture: 'singleBeer-page.json'});
  
      cy.visit('http://localhost:3000/1')
  
    })

    it('Should display a title, on page load', () => {
        cy.contains('Home Brew')
    })
    
    it('Should display the correct data for beer', () => {
        cy.contains('Buzz')
        cy.contains('A Real Bitter Experience.')
        cy.contains('A light, crisp and bitter IPA')
        cy.contains('4.5')
        cy.contains('Spicy chicken tikka masala')
    })

    it('should have a Nav-Link to go back home'), () => {
        cy.get('.home-link > p').click()
        cy.url().should('eq', 'http://localhost:3000/beers')   
    }

    it('should have a button to add a beer to favorites'), () => {
        cy.get('.add-favorite')
        .contains('Add to Favorites')
        .click()
    }
})