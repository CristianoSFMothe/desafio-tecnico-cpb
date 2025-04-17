describe('Acessar a página de registro de clubes', () => {
  beforeEach(() => {
    cy.login();
  });

  it('Deve registar um clube com sucesso', () => {
    cy.registerClub();
  });

  context('Cenários inválidos de registro', () => {
    it('Não deve registrar clube sem informar o CNPJ', () => {
      cy.emptyCNPJField();
    });

    it('Não deve registrar com CNPJ já cadastrado', () => {
      cy.existingCNPJ('24.636.787/0001-40');
    });
  });
});