# HomeBrew

As a lover of beer and food, sometimes its hard to decide what food too pare pair a new beer with. Well now we have a solution, simply select your beer, and you will receive a beautiful food pairing for your new brew

Deployed Application here: [HomeBrew]()

## Table of Contents
  - [Setup](#setup)
  - [Technologies](#technologies)
  - [Project Spec](#project-spec)
  - [Abstract](#abstract)
  - [Learning Goals](#learning-goals)
  - [Preview](#preview)
  - [Wins + Challenges](#wins-and-challenges)
  - [Authors](#Authors)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation Instructions <a name="installationInstructions"></a>

1. Clone down [this repository](https://github.com/Mortis78/HomeBrew)
2. Run `npm install`
3. Run `npm start` in your terminal
4. Go to http://localhost:3000/ and you should see the website
5. Enter `control + c` in your terminal to stop the server at any time.

## Technologies
  - Javascript
  - CSS / HTML
  - VSCode
  - GitHub
  - React 
  - Router
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line
  - Cypress
  
## Project Spec
[click here](https://frontend.turing.edu/projects/module-3/showcase.html)

## Abstract 

This project is designed to allow users to learn more about beer, and to gain confedence in there selection of food to pair with it. As the user visits the page, a number of beer images are displayed.  A user can click on each beer image and a new page will open with all of the beer's details. Once a user is on the details page, they will see a description, an option to add a beer to the favorites.  When the user chooses to return home, they can click a home link on the bottom of the screen. If the user puts in the wrong url, the app also includes error handling with a link to return to home.

We created a backend for this project to satisfy the requirements of our Stretch Tech Project. We were given an 8 day timeframe to learn and implement new technologies such as Express, Node, PostgresSQL, Knex to build a backend server and database.

## Learning Goals

- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router

## Visual of Functionality:

Scroll through the main page to view all beers in the database. Each beer's img, name, tagline are visible.


Click on the beer's(name/img) link to view more details and for food pairing options. On this page a description of the beer is presented in addition to food pairing recomendations. The user is also given the ability to add a beer from their favorites by clicking the Add to favorits button. Click the  Back to Home link near the bottom of the page to return to the main page.

![gif of navigating](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTRkZjg1ZTNiMTFjN2NmYWFmM2UxYTI1MTM5MjNmMzdiOWVlODA3ZCZjdD1n/yKym67WoKt3AIQ38UH/giphy.gif)

## Code Architecture <a name="codeArchitecture"></a>

The React architecture is based on two class components (App.js, SingleBeer.js) and four functional components (Header.js, ErrorPage.js, Beers.js, Card.js). The class components hold state and are in charge of the network requests, while the functional components render information passed down as props.

## Wins & Challenges

- Successfully created app using React framework
- Successfully implemented Router
- Successfully implemented cypress testing to check functionality
- Successfully implemented error handling 

- Creating a fresh custom backend and then manipulating the data using React was a learning curve, but ultimately it was super cool to build a full stack app!
- Implementing cypress was something challenging for us, so getting th syntax correct took additional research. 
- Error was tricky but we were able to add properties to state to handle errors. 
- We would have liked to further this app by beautfying the recommendation page, and cleaning up the functionality. 

## Authors

<table>
   <tr>
      <td> John Ammon <a href="https://github.com/Mortis78">GH</td>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/113194002?v=4" alt="John Ammon"
 width="150" height="auto" /></td>
</table>