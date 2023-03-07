describe('should see all beers images, names, and taglines.', () => {
    beforeEach(() => {
      cy.intercept('GET', 'http://localhost:3001/api/v2/Favorites',{fixture: 'favorites-page.json'});
  
      cy.visit('http://localhost:3000/Favorites');
  
    });

    it('Should display a title, on page load', () => {
        cy.contains('Home Brew')
    });
    
    it('Should display the correct data for each beer', () => {
        cy.contains('Trashy Blonde')
        cy.contains('You Know')
        

        cy.contains('Berliner Weisse With Yuzu')
        cy.contains('Japanese citrus fruit')
       
    } );
    
    it("Should be able to click the beer to see more details", () => {
      cy.get(".beer-link").first().click()
      cy.intercept("GET", "http://localhost:3000/v2/beers/1", {
        "id": 3,
        "name": "Berliner Weisse With Yuzu - B-Sides",
        "tagline": "Japanese Citrus Berliner Weisse.",
        "description": "Japanese citrus fruit intensifies the sour nature of this German classic.",
        "image_url": "https://images.punkapi.com/v2/keg.png",
        "abv": 4.2,
        "food_pairing": [
        "Smoked chicken wings",
        "Miso ramen",
        "Yuzu cheesecake"]
      })
      cy.url("http://localhost:3000/").should('include', "3")
    })
  } 
)