import { faker } from "@faker-js/faker";

const fakerBR = require('faker-br');
const { generateCNPJ } = require("../support/utils/cnpj-generator.utils");
const { generateAcronym } = require("../support/utils/generator-sigla.utils")
const { generateRandomDate } = require("../support/utils/generate-random-date")

faker.location = 'pt_BR'

const CNPJ = generateCNPJ();
const clubName = faker.company.name();
const clubSigla = generateAcronym(clubName, 1)
const email = faker.internet.email()
const date = generateRandomDate()
const phone = faker.phone.number('(##) #####-####').replace(/\s*x\d+/g, '');
const cep = fakerBR.address.zipCode('#####-###');
const address = fakerBR.address.streetAddress();
const number = faker.number.int({ max: 999 });
const cpf = fakerBR.br.cpf()
const name = faker.person.fullName()
const emailPresident = faker.internet.email()
const cpfDirector = fakerBR.br.cpf()
const nameDirector = faker.person.fullName()

describe('Acessar a página de registro de clubes', () => {
  beforeEach(() => {
    cy.login()
  })
  it('Deve registar um clube com sucesso', () => {
    cy.accessPageCreateAccount()
    cy.fillCnpjFieldAndClickSearchButton(CNPJ)
    cy.fillFieldName(clubName)
    cy.fillFieldAcronym(clubSigla)
    cy.fillFieldEmail(email)
    cy.fillFieldDateFoundation(date)
    cy.fillFieldPhone(phone)
    cy.fillFieldCEP(cep)
    cy.fillFieldAddressNumber(number)
    cy.fillFieldAddress(address)
    cy.fillFieldNeighborhood('centro')
    cy.selectStateRioDeJaneiro('Rio de Janeiro')
    cy.selectCityRioDeJaneiro('Rio de Janeiro')
    cy.fillFieldCPF(cpf)
    cy.fillFieldsPresident(name, emailPresident, date, date, date)
    cy.fillFieldsDirector(cpfDirector, nameDirector)
    cy.markModality()
  })
})