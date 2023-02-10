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
    cy.get(".logo").should("be.visible");
   });
   it("Should have a search bar to search movies by title", () => {
    cy.get(".search-field").should("be.visible");
    cy.get("button").should("be.visible");
   });
   it("Should display all movies", () => {
    cy.get(".movies-container").should("be.visible");
    cy.get(".movie-card").should("be.visible");
    cy.get(".movie-image").should("be.visible");
   });
   it("Should be able to view movie details once a user clicks on a card", () => {
    cy.get('.movie-card').first().click();
   });
   it("Should be able to find a movie by its title in the search bar", () => {
    cy.get(".search-field").type("Black");
    cy.get(".movie-image").should("have.length", 1);
   });
   it("Should be able to see an error message when there are no movies that match the title", () => {
    cy.get(".search-field").type("eardrum");
    cy.get(".no-movies").contains("Sorry, no movies found. Please try again!");
   });
   it("Should be able to clear the form and see all movies if something is entered into the search bar", () => {
    cy.get(".search-field").type("eardrum");
    cy.get(".no-movies").contains("Sorry, no movies found. Please try again!");
    cy.get("button").click();
    cy.get(".movie-image").should("have.length", 3);
   });
});