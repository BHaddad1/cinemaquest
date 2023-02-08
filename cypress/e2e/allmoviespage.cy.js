describe('CinemaQuest Main Page', () => {
  beforeEach(()=> {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "../fixtures/allMovies"
    })
    cy.visit("http://localhost:3000/")
   })
   it("Should have a header form", () => {
    cy.get(".title").contains("CinemaQuest");
    cy.get(".logo");
    cy.get(".search-field");
    cy.get("button");
   });
   it("Should display all movies", () => {
    cy.get(".movies-container");
    cy.get(".movie-card");
    cy.get(".movie-image");
   });
   it("Should be able to view movie details once a user clicks on a card", () => {
    cy.get('.movie-card').first().click();
   });
})