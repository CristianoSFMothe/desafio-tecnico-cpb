import login from '../support/pages/loginPage'
import registerPage from './pages/registerPage';

Cypress.Commands.add('login', () => {
  login.accessPage()
  login.validateLoginPage()
  login.clickButton()
});

Cypress.Commands.add('fillInClubDetails', (CNPJ, clubName, sigla, email, date, phone) => {
  registerPage.validateRegisterPage()
  registerPage.clickAcceptTermsButton()
  registerPage.fieldCNPJClub(CNPJ)
  registerPage.clickButtonSearchCNPJ()
  registerPage.fieldName(clubName)
  registerPage.fieldAcronym(sigla)
  registerPage.fieldEmail(email)
  registerPage.fieldDateFoundation(date)
  registerPage.fielPhone(phone)
});



Cypress.Commands.add('fillAddress', (cep, address, number, neighborhood, state, city) => {
  registerPage.fielCep(cep)
  registerPage.fielAddress(address)
  registerPage.fielAddressNumber(number)
  registerPage.fielNeighborhood(neighborhood)
  registerPage.selectState(state)
  registerPage.selectCity(city)
});


Cypress.Commands.add('fillFieldsPresident', (cpf, name, email, dateStar, dateElection, dateEnd) => {
  registerPage.fieldCpf(cpf)
  registerPage.clickButtonSearchCPF()
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
  // registerPage.saveDataClub()
});