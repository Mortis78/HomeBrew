describe('should see all favorited beers images, names, and taglines.', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.punkapi.com/v2/beers',{fixture: 'favorites-page.json'});
  
      cy.visit('http://localhost:3000/beers');
  
    });

    it.only("Should be able to go to Favorites", () => {
        cy.get('.beer-cards > :nth-child(2)')
        cy.get('.beer-name').contains("Trashy Blonde")
        .click()
        cy.url().should('eq', 'http://localhost:3000/2')
        cy.get('.add-favorite').click()
        cy.get('.home-link > p').click()
        cy.url().should('eq', 'http://localhost:3000/beers')
        cy.get('.favorites-link')
        .click()
        cy.url().should('eq', 'http://localhost:3000/Favorites')
        cy.get('.beer-name').contains('Trashy Blonde')
        
    
      })
    
    
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