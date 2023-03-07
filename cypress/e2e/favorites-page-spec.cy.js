describe('should see all favorited beers images, names, and taglines.', () => {
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
      cy.intercept("GET", "http://localhost:3000/v2/beers/1",{
        "id": 2,
        "name": "Trashy Blonde",
        "tagline": "You Know You Shouldn't",
        "description": "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
        "image_url": "https://images.punkapi.com/v2/2.png",
        "abv": 4.1,
        "food_pairing": [
        "Fresh crab with lemon",
        "Garlic butter dipping sauce",
        "Goats cheese salad",
        "Creamy lemon bar doused in powdered sugar"]
      })
      cy.url("http://localhost:3000/").should('include', "3")
    })

    it('should have a Nav-Link to go back home'), () => {
        cy.get(".homelink").click()
        cy.url("http://localhost:3000/").should('include', "beers")   
    }
  } 
)