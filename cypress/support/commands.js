import login from '../support/pages/loginPage'
import registerPage from './pages/registerPage';

Cypress.Commands.add('login', () => {
  login.accessPage()
  login.validateLoginPage()
  login.clickButton()
});

Cypress.Commands.add('accessPageCreateAccount', () => {
  registerPage.validateRegisterPage()
  registerPage.clickAcceptTermsButton()
});

Cypress.Commands.add('fillCnpjFieldAndClickSearchButton', (CNPJ) => {
  registerPage.fieldCNPJClub(CNPJ)
  registerPage.clickButtonSearchCNPJ()
});

Cypress.Commands.add('fillFieldName', (clubName) => {
  registerPage.fieldName(clubName)
});

Cypress.Commands.add('fillFieldAcronym', (sigla) => {
  registerPage.fieldAcronym(sigla)
});

Cypress.Commands.add('fillFieldEmail', (email) => {
  registerPage.fieldEmail(email)
});

Cypress.Commands.add('fillFieldDateFoundation', (date) => {
  registerPage.fieldDateFoundation(date)
});