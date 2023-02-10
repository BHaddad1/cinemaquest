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
   });
   it("Should have an error message", () => {
    cy.get("h2").contains("Sorry, page not found.");
   });
   it("Should display a back home button that takes you to the main page", () => {
    cy.get("button").contains("Go Back Home").click();
   });
});