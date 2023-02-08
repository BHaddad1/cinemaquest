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
})