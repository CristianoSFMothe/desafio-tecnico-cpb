import { faker } from "@faker-js/faker";
const { generateCNPJ } = require("../support/utils/cnpj-generator.utils");
const { generateAcronym } = require("../support/utils/generator-sigla.utils")
// const { generateRandomDate } = require("../support/utils/generate-random-date")

faker.location = 'pt_BR'

const CNPJ = generateCNPJ();
const clubName = faker.company.name();
const clubSigla = generateAcronym(clubName, 1)
const email = faker.internet.email()
// const date = generateRandomDate()
const name = faker.person.fullName()

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
    cy.fillFieldDateFoundation()
    // cy.fillFieldDateFoundation(date)
  })
})