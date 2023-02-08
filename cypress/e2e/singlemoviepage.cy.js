describe('template spec', () => {
 beforeEach(()=> {
  cy.visit('http://localhost:3000/movies/436270')
 })
 
 it('should display a page', () => {
  expect(true).to.eql(true)
 })
})
