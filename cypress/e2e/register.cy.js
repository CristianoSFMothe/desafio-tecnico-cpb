describe('Acessar a página de registro de clubes', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Deve registar um clube com sucesso', () => {
    cy.registerClub();
  });

  it.only('Não deve registar clube sem informar o CNPJ', () => {
    cy.emptyCNPJField();
  });

});
