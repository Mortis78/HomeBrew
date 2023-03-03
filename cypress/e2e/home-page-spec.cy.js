describe('home-page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v2/beers', {fixture: 'home-test'});
  
      cy.visit('http://localhost:3000/')
  
    });

    it('Should display a title, and all beers on page load', () => {
        cy.contains('Home Brew')
    });
    
    it('Should display the correct data for each beer', () => {
        cy.get('.beer-image-span').first().contains('Buzz')
        cy.get('.beer-image-span').first().contains('A Real Bitter Experience.')
        cy.get('.beer-info').first().contains('A light, crisp and bitter IPA')
        cy.get('.beer-info').first().contains('https://images.punkapi')
        cy.get('.beer-info').first().contains('4.5')
        cy.get('.beer-info').first().contains('Spicy chicken tikka masala')
    
        
        cy.get('.beer-image-span').last().contains('Berliner Weisse With Yuzu - B-Sides')
        cy.get('.beer-image-span').last().contains('Japanese Citrus Berliner')
        cy.get('.beer-info').last().contains('Japanese citrus fruit')
        cy.get('.beer-info').last().contains('https://images.punkapi')
        cy.get('.beer-info').last().contains('4.2')
        cy.get('.beer-info').last().contains('Smoked chicken wings')
    
      });

})