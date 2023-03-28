describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3003')
    cy.contains('Blogs')
  })
})