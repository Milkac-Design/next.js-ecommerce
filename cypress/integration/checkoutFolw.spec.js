describe('Test the checkout flow', () => {
  it('Test checkout flow and thank you page', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('[data-cy=harley-product-link]').click();
    cy.get('[data-cy=add-to-cart]').click();
    cy.get('[data-cy=shopping-cart]').click();
    cy.get('[data-cy=checkout-button]').click();
    cy.get('#firstName')
      .type('First');
    cy.get('#lastName').click()
      .type('Last');
    cy.get('#email').click()
      .type('fake@mail.com');
    cy.get('#shipping').click()
      .type('My Adress 1');
    cy.get('#card').click()
      .type('12345678901234');
    cy.get('[data-cy=buy-now]').click()
    cy.get('[data-cy=thank-you]')
      .contains('Thank You For shopping with us!');
  })
})