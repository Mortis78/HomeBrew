describe('home-page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v2/beers/1', {fixture: 'singleBeer-page'});
  
      cy.visit('http://localhost:3000/')
  
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

    it('should have a NavLink to go back home'), () => {
        cy.contains('Back to Home')
    }

    it('should have a button to add a beer to favorites'), () => {
        cy.containes('Add to Favorites')
    }


})