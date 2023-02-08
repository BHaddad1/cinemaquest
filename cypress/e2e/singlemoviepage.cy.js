describe('singleMoviePage', () => {
  beforeEach(()=> {
    cy.intercept("GET",'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270',{fixture:'singlemovie'})
    cy.visit('http://localhost:3000/movies/436270')
})

  it('Should display a page', () => {
    expect(true).to.eql(true)
  })

  it('Should have an image displayed',() => {
    cy.get(".poster").should('be.visible')
  })

  it('Should display a movie title', function() {
    cy.get(".movie-title").contains("Black Adam")
  })

  it('Should display a tagline', function() {
    cy.get("h3").should('contain',"The world needed a hero. It got Black Adam.")
  })

  it('Should display a released date', function() {
    cy.get("h3").should('contain',"2022/10/19" )
  })

  it('Should display an average rating', function() {
    cy.get('h3').should('contain',"4")
  })

  it('Should display genres for the movie', function() {
    cy.get('h3').should('contain',"Action","Fantasy","Science Fiction") 
  })

  it('Should display an overview segment', function() {
    cy.get('p').should('contain',"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world." )
  })

  it('Should display a movie budget', function() {
    cy.get('p').should('contain','$200,000,000')
  })

  it('Should display a movie total revenue', function(){
    cy.get('p').should('contain','$384,571,691')
  })
  
  it('Should display a total movie runtime', function() {
    cy.get('p').should('contain','2 hrs 5 min')
  })
  it('Should display the company logo', function() {
    cy.get(".logo").should('be.visible')
  })
  it('Should display the company name CinemaQuest', function() {
    cy.get('.title').should( 'contain','CinemaQuest')
  })
  it('Should have a search bar input area', function() {
    cy.get('input[placeHolder="Movie Title"]').should('be.visible')
  })
  it('Should have a submit button visible', function() {
    cy.get('button').should('be.visible')
  })
  it('Should have a return to all movies area', function() {
    cy.get('.back-button').should('be.visible')
  })
  it('User should be able to click the back button and see all movies', function() {
    cy.get('.back-button').click()
    cy.get('.movies-container').should('be.visible')
  })

})

   
   

 