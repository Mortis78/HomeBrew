describe('home-page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v2/beers', {fixture: 'home-page'});
  
      cy.visit('http://localhost:3000/')
  
    });

    it('Should display a title, on page load', () => {
        cy.contains('Home Brew')
    });
    
    it('Should display the correct data for each beer', () => {
        cy.contains('Buzz')
        cy.contains('A Real Bitter Experience.')
        cy.contains('A light, crisp and bitter IPA')

        cy.contains('Trashy Blonde')
        cy.contains('You Know')
        cy.contains('A titillating, neurotic, peroxide punk of a Pale Ale.')
        
        cy.contains('Berliner Weisse With Yuzu - B-Sides')
        cy.contains('Japanese Citrus Berliner')
        cy.contains('Japanese citrus fruit')
    } );
    
    it('Should be able to click the beer img / beer title', () => {
      cy.get(".beer-image")
      .click()
      cy.get(".beer-name")
      .click()
    });
  } 
)