let el = require('../elements/registarElements').registerPage
const { loadPage, waitElement, click, set } = require('../actions')

export default {
  accessPage() {
    loadPage('/')
  },

  validateRegisterPage() {
    return waitElement(el.modalTitle)
  },

  clickAcceptTermsButton() {
    waitElement(el.agreeButton)
    click(el.agreeButton, el.agreeButtonText)
  },

  fieldCNPJClub(CNPJ) {
    waitElement(el.fieldCNPJ)
    if (CNPJ !== null) {
      set(el.fieldCNPJ, CNPJ)
    }
  },

  clickButtonSearchCNPJ() {
    waitElement(el.searchCNPJButton)
    click(el.searchCNPJButton)
    waitElement(el.titleModalInfoCNPJ)
    click(el.btnConfirmModal)
  },

  fieldName(name) {
    click(el.fieldNameClub)
    if (name !== null) {
      set(el.fieldNameClub, name)
    }
  },

  fieldAcronym(sigla) {
    if (sigla !== null) {
      set(el.fieldSigla, sigla)
    }
  },

  fieldEmail(email) {
    click(el.fieldEmail)
    if (email !== null) {
      set(el.fieldEmail, email)
    }
  },

  fieldDateFoundation(date) {
    click(el.fieldFoundationDate)
    if (date !== null) {
      set(el.fieldFoundationDate, date)
    }
  }

}