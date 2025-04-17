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

Cypress.Commands.add('fillFieldPhone', (phone) => {
  registerPage.fielPhone(phone)
});

Cypress.Commands.add('fillFieldCEP', (cep) => {
  registerPage.fielCep(cep)
});

Cypress.Commands.add('fillFieldAddress', (address) => {
  registerPage.fielAddress(address)
});

Cypress.Commands.add('fillFieldAddressNumber', (number) => {
  registerPage.fielAddressNumber(number)
});

Cypress.Commands.add('fillFieldNeighborhood', (neighborhood) => {
  registerPage.fielNeighborhood(neighborhood)
});

Cypress.Commands.add('selectStateRioDeJaneiro', (state) => {
  registerPage.selectState(state)
});

Cypress.Commands.add('selectCityRioDeJaneiro', (city) => {
  registerPage.selectCity(city)
});

Cypress.Commands.add('fillFieldCPF', (cpf) => {
  registerPage.fieldCpf(cpf)
  registerPage.clickButtonSearchCPF()
});

Cypress.Commands.add('fillFieldsPresident', (name, email, dateStar, dateElection, dateEnd) => {
  registerPage.fieldNamePresident(name)
  registerPage.fieldEmail(email)
  registerPage.fieldDateStartPresident(dateStar)
  registerPage.fieldDateElectionPresident(dateElection)
  registerPage.fieldDateEndPresident(dateEnd)

});

Cypress.Commands.add('fillFieldsDirector', (cpf, name) => {
  registerPage.fieldCpfDirector(cpf)
  registerPage.clickButtonSearchCPFDirector()
  registerPage.fieldNameDirector(name)
});

Cypress.Commands.add('markModality', () => {
  registerPage.modality()
  registerPage.saveDataClub()
});