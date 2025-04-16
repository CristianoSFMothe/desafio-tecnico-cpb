import login from '../support/pages/loginPage'

Cypress.Commands.add('login', () => {
  login.accessPage()
  login.validateLoginPage()
  login.clickButton()
});