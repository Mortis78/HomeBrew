export{}
describe('should see all beers images, names, and taglines.', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v2/beers',{fixture: 'home-page.json'});
  
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
    
    it("Should be able to click the beer to see more details", () => {
      cy.get(".beer-link").first().click()
      cy.intercept("GET", "http://localhost:3000/v2/artists/1", {
        "id": 1,
        "name": "Buzz",
        "tagline": "A Real Bitter Experience.",
        "description": "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.5,
        "food_pairing": [
        "Spicy chicken tikka masala",
        "Grilled chicken quesadilla",
        "Caramel toffee cake"]
      } )
      cy.url("http://localhost:3000/").should('include', "1")
    })
  } 
)