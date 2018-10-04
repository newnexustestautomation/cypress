
context('Demo RDW', () => {
  beforeEach(() => {
    cy.visit('https://snellemotorboten.rdw.nl')
  })

   // The most commonly used query is 'cy.get()', you can
    // think of this like the '$' in jQuery

    it('cy.get() - Inputveld', () => {
      // https://on.cypress.io/get
      cy.get('#naamContactpersoon')
      //cy.get('input[id="naamContactpersoon"]')
      .type('Hello World!').should('have.value', 'Hello World!')

        cy.get('.switch-required').within(() => {
            cy.get('button:first').should('contain', 'Particulier').click()
            cy.get('button:last').should('contain', 'Rechtspersoon').click()
        })
      //cy.get('.query-btn').should('contain', 'Button')

      //cy.get('#querying .well>button:first').should('contain', 'Button')
      //              ↲
      // Use CSS selectors just like jQuery
    })

    it('cy.get() - Button', () => {
        cy.get('.switch-required').within(() => {
            cy.get('button:first').should('contain', 'Particulier').click()
            cy.get('button:last').should('contain', 'Rechtspersoon').click()
        })
    })

//ng-pristine ng-invalid ng-touched
//cy.get('.action-form').submit()
    it('cy.get() - Submit button', () => {
        cy.get('button[type=submit').should('contain', 'Doorgaan').click()
    })

    it('cy.viewport() - iphone-6', () => {
        cy.viewport('iphone-6')  // Set viewport to 375px x 667px
        cy.get('button[type=submit').should('contain', 'Doorgaan').click()
    })

})