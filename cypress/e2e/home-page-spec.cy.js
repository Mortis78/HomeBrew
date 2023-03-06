export{}
describe('should see all beers images, names, and taglines.', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v2beers',{fixture: 'home-page.json'});
  
      cy.visit('http://localhost:3000/beers');
  
    });

    it('Should display a title, on page load', () => {
        cy.contains('Home Brew')
    });
    
    it('Should display the correct data for each beer', () => {
        cy.contains('Buzz')
        cy.contains('A Real Bitter Experience.')
        

        cy.contains('Trashy Blonde')
        cy.contains('You Know')
        
        
        cy.contains('Berliner Weisse With Yuzu - B-Sides')
        cy.contains('Japanese Citrus Berliner')
       
    } );
    
    it('Should be able to click the beer img / beer title', () => {
      cy.get(".beer-image")
      .click()
      cy.get(".beer-name")
      .click()
    });
  } 
)