
context('Demo RDW - iPhone 6', () => {
  beforeEach(() => {
    cy.visit('https://snellemotorboten.rdw.nl')
    cy.viewport('iphone-6')  // Set viewport to 375px x 667px
  })

   // The most commonly used query is 'cy.get()', you can
    // think of this like the '$' in jQuery

    it('Vul het formulier in..', () => {
      // https://on.cypress.io/get
      //naam contactpersoon
      cy.get('#naamContactpersoon')
      .type('Hello World!').should('have.value', 'Hello World!')
      //email adres
      cy.get('#emailadres')
      .type('hello@world.com').should('have.value', 'hello@world.com')
      //email adres check
      cy.get('#emailadresCheck')
      .type('hello@world.com').should('have.value', 'hello@world.com')

      cy.get('.switch-required').within(() => {
        cy.get('button:first').should('contain', 'Particulier').click()
        cy.get('button:last').should('contain', 'Rechtspersoon').click()
      })
    })


    //verstuur
    //it('cy.get() - Submit button', () => {
    //    cy.get('button[type=submit').should('contain', 'Doorgaan').click()
    //})


})