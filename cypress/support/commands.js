import login from '../support/pages/loginPage';
import registerPage from '../support/pages/registerPage';
import { faker } from "@faker-js/faker";
const fakerBR = require('faker-br');
const { generateCNPJ } = require("../support/utils/cnpj-generator.utils");
const { generateAcronym } = require("../support/utils/generator-sigla.utils");
const { generateRandomDate } = require("../support/utils/generate-random-date");
const { waitElement, click, get_text } = require('./actions')

let el = require('./elements/registarElements').registerPage

faker.locale = 'pt_BR';

Cypress.Commands.add('login', () => {
  login.accessPage();
  login.validateLoginPage();
  login.clickButton();
});

Cypress.Commands.add('registerClub', () => {
  // Geração de dados dinâmica
  const CNPJ = generateCNPJ();
  const clubName = faker.company.name();
  const siglaClub = generateAcronym(clubName, 1);
  const emailClub = faker.internet.email();
  const date = generateRandomDate();
  const phoneClub = faker.phone.number('(##) #####-####').replace(/\s*x\d+/g, '');
  const cep = fakerBR.address.zipCode('#####-###');
  const address = fakerBR.address.streetAddress();
  const number = faker.number.int({ max: 999 });
  const cpf = fakerBR.br.cpf();
  const name = faker.person.fullName();
  const emailPresident = faker.internet.email();
  const cpfDirector = fakerBR.br.cpf();
  const nameDirector = faker.person.fullName();

  // Dados do Clube
  registerPage.validateRegisterPage('Informações para Cadastro de Clube');

  registerPage.fieldCNPJClub(CNPJ);
  registerPage.clickSearchAndConfirm(
    el.searchCNPJButton,
    el.titleModalInfo,
    el.btnConfirmModal
  )

  registerPage.fillInClubDataFields(
    clubName,
    siglaClub,
    emailClub,
    date,
    phoneClub
  )

  // Dados de Endereço
  registerPage.fillInAddressFields(
    cep,
    address,
    number,
    'centro'
  )
  registerPage.selectState('Rio de Janeiro');
  registerPage.selectCity('Rio de Janeiro');

  // Presidente
  registerPage.fillCpfField(el.fielCpf, cpf);
  registerPage.clickSearchAndConfirm(
    el.searchPresidentButton,
    el.titleModalInfo,
    el.btnConfirmModal
  )
  registerPage.fillInPresidencyData(
    name,
    emailPresident,
    date,
    date,
    date
  )

  // Diretor
  registerPage.fillCpfField(el.fieldCpfDirector, cpfDirector);
  registerPage.clickSearchAndConfirm(
    el.searchDirectorButton,
    el.titleModalInfo,
    el.btnConfirmModal
  )
  registerPage.fillInDirectorData(nameDirector)

  // Modalidade
  registerPage.modality();

  // Salvar Clube
  registerPage.saveDataClub();
});

Cypress.Commands.add('emptyCNPJField', () => {
  registerPage.validateRegisterPage('Informações para Cadastro de Clube');
  registerPage.fieldCNPJClub(null);
  registerPage.clickSearchAndConfirm(
    el.searchCNPJButton,
    el.titleModalInfo,
    el.btnConfirmModal
  )
});

Cypress.Commands.add('existingCNPJ', (CNPJ) => {
  registerPage.validateRegisterPage('Informações para Cadastro de Clube');
  registerPage.fieldCNPJClub(CNPJ);
  registerPage.clickSearchAndConfirm(
    el.searchCNPJButton,
    el.titleModalInfo,
    el.btnConfirmModal
  )
});

Cypress.Commands.add('invalidCNPJ', (CNPJ, text) => {
  // registerPage.validateRegisterPage();
  // waitElement(el.agreeButton)
  // click(el.agreeButton, el.agreeButtonText)
  // registerPage.invalidFieldCNPJ(CNPJ)
  // cy.wait(1000)
  // click(el.searchPresidentButton)
  // cy.wait(1000)
  // waitElement(el.titleModalInfo)
  // click(el.btnConfirmModal)
  // waitElement(el.invalidFeedback)
  // get_text(text)
  registerPage.validateRegisterPage();
  registerPage.clickAcceptTermsButton();
  registerPage.fieldCNPJClub(CNPJ);
  registerPage.clickButtonSearchCNPJ();
  waitElement(el.invalidFeedback)
  registerPage.validateMessage(text)
});
