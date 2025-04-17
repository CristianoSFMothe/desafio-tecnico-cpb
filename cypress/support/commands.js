import login from '../support/pages/loginPage';
import registerPage from '../support/pages/registerPage';
import { faker } from "@faker-js/faker";
const fakerBR = require('faker-br');
const { generateCNPJ } = require("../support/utils/cnpj-generator.utils");
const { generateAcronym } = require("../support/utils/generator-sigla.utils");
const { generateRandomDate } = require("../support/utils/generate-random-date");

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
  const clubSigla = generateAcronym(clubName, 1);
  const email = faker.internet.email();
  const date = generateRandomDate();
  const phone = faker.phone.number('(##) #####-####').replace(/\s*x\d+/g, '');
  const cep = fakerBR.address.zipCode('#####-###');
  const address = fakerBR.address.streetAddress();
  const number = faker.number.int({ max: 999 });
  const cpf = fakerBR.br.cpf();
  const name = faker.person.fullName();
  const emailPresident = faker.internet.email();
  const cpfDirector = fakerBR.br.cpf();
  const nameDirector = faker.person.fullName();

  // Dados do Clube
  registerPage.validateRegisterPage();
  registerPage.clickAcceptTermsButton();
  registerPage.fieldCNPJClub(CNPJ);
  registerPage.clickButtonSearchCNPJ();
  registerPage.fieldName(clubName);
  registerPage.fieldAcronym(clubSigla);
  registerPage.fieldEmail(email);
  registerPage.fieldDateFoundation(date);
  registerPage.fielPhone(phone);

  // Dados de Endereço
  registerPage.fielCep(cep);
  registerPage.fielAddress(address);
  registerPage.fielAddressNumber(number);
  registerPage.fielNeighborhood('Centro');
  registerPage.selectState('Rio de Janeiro');
  registerPage.selectCity('Rio de Janeiro');

  // Presidente
  registerPage.fieldCpf(cpf);
  registerPage.clickButtonSearchCPF();
  registerPage.fieldNamePresident(name);
  registerPage.fieldEmail(emailPresident);
  registerPage.fieldDateStartPresident(date);
  registerPage.fieldDateElectionPresident(date);
  registerPage.fieldDateEndPresident(date);

  // Diretor
  registerPage.fieldCpfDirector(cpfDirector);
  registerPage.clickButtonSearchCPFDirector();
  registerPage.fieldNameDirector(nameDirector);

  // Modalidade
  registerPage.modality();

  // Salvar Clube
  registerPage.saveDataClub();
});
