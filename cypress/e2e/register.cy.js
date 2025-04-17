describe('Acessar a página de registro de clubes', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Deve registar um clube com sucesso', () => {
    cy.registerClub();
  });
});
