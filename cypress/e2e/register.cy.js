describe('Acessar a página de registro de clubes', () => {
  beforeEach(() => {
    cy.login();
  });

  it.only('Deve registar um clube com sucesso', () => {
    cy.registerClub();
  });

  it('Não deve registar clube sem informar o CNPJ', () => {
    cy.emptyCNPJField();
  });

  it('Não deve registar com CNPJ já cadastrado', () => {
    cy.existingCNPJ('24.636.787/0001-40')
  });


});
