describe('End to end, add and removing products', () => {
  it('Add, change and remove from Cart', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('[data-cy=groot-product-link]').click();
    cy.get('[data-cy=product-name]').should('be.visible');
    cy.get('[data-cy=add-to-cart]').click();
    cy.get('[data-cy=back-to-products]').click();
    cy.get('[data-cy=gambit-product-link]').click();
    cy.get('[data-cy=add-to-cart]').click();
    cy.get('[data-cy=shopping-cart]').click();
    cy.get(':nth-child(1) > .listItemStyle > :nth-child(3) > [data-cy=remove-item]').click();
  })
})