describe('CinemaQuest Error Page', () => {
  beforeEach(()=> {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      method: "GET",
      fixture: "../fixtures/allMovies"
    })
    cy.visit("http://localhost:3000/wha")
   });
   it("Should have a form", () => {
    cy.get(".title").contains("CinemaQuest");
    cy.get(".logo").should("be.visible");
    cy.get(".search-field").should("be.visible");
    cy.get("button").should("be.visible");
   });
   it("Should have an error message", () => {
    cy.get(".error").contains("Sorry, page found.")
   })
  })