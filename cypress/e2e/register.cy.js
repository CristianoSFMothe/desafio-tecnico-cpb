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
    // DADOS DO CLUBE
    cy.fillInClubDetails(CNPJ, clubName, clubSigla, email, date, phone)


    // DADOS DO ENDEREÇO    
    cy.fillAddress(cep, number, address, 'Centro', 'Rio de Janeiro', 'Rio de Janeiro')

    // DADOS DA PRESIDÊNCIA
    cy.fillFieldsPresident(cpf, name, emailPresident, date, date, date)

    // DADOS DO DIRETOR
    cy.fillFieldsDirector(cpfDirector, nameDirector)
    cy.markModality()
  })
})