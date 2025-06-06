let el = require('../elements/registarElements').registerPage
const { loadPage, waitElement, click, set, get_text, fillField, waitElementNotVisible } = require('../actions')

export default {
  accessPage() {
    loadPage('/')
  },

  validateRegisterPage(titleModal) {
    waitElement(el.modalTitle)
    waitElement(el.agreeButton)
    get_text(el.modalTitle, titleModal)
    click(el.agreeButton, el.agreeButtonText)
    waitElementNotVisible(el.modalTitle)
  },

  fieldCNPJClub(CNPJ) {
    waitElementNotVisible(el.modalTitle)
    waitElement(el.fieldCNPJ)
    if (CNPJ !== null) {
      set(el.fieldCNPJ, CNPJ)
    }
  },

  fillInClubDataFields(nameClub, siglaClub, emailClub, dateFoundation, phoneClub) {
    if (nameClub !== null) {
      waitElement(el.fieldNameClub)
      set(el.fieldNameClub, nameClub)
    }
    if (siglaClub !== null) {
      waitElement(el.fieldSigla)
      set(el.fieldSigla, siglaClub)
    }
    if (emailClub !== null) {
      waitElement(el.fieldEmail)
      set(el.fieldEmail, emailClub)
    }
    if (dateFoundation !== null) {
      waitElement(el.fieldFoundationDate)
      set(el.fieldFoundationDate, dateFoundation)
    }
    if (phoneClub !== null) {
      waitElement(el.fieldPhone)
      set(el.fieldPhone, phoneClub)
    }
  },

  clickSearchAndConfirm(searchButton, modalTitle, confirmButton) {
    waitElement(searchButton);
    click(searchButton);
    waitElement(modalTitle);
    click(confirmButton);
  },

  fieldEmail(email) {
    click(el.fieldEmail)
    if (email !== null) {
      set(el.fieldEmail, email)
    }
  },

  fillInAddressFields(cep, address, number, neighborhood) {
    waitElement(el.fieldCEP)
    if (cep !== null) {
      set(el.fieldCEP, cep)
    }
    waitElement(el.fieldAddress)
    if (address !== null) {
      set(el.fieldAddress, address)
    }
    waitElement(el.fieldAddressNumber)
    if (number !== null) {
      set(el.fieldAddressNumber, number)
    }
    waitElement(el.fieldNeighborhood)
    if (neighborhood !== null) {
      set(el.fieldNeighborhood, neighborhood)
    }
  },

  selectState(state) {
    click(el.selectState);
    cy.get(el.selectState).should('be.visible').type(`${state}{enter}`)
  },

  selectCity(city) {
    click(el.selectCity);
    cy.get(el.selectCity).should('be.visible').type(`${city}{enter}`)
  },

  fillCpfField(selector, cpf) {
    waitElement(selector);
    if (cpf !== null) {
      set(selector, cpf);
    }
  },

  fillInPresidencyData(name, email, dateStar, dateElection, dateEnd) {
    waitElement(el.fieldNamePresident)
    if (name !== null) {
      set(el.fieldNamePresident, name)
    }
    waitElement(el.fieldEmailPresident)
    if (email !== null) {
      set(el.fieldEmailPresident, email)
    }
    waitElement(el.fieldEmailPresident)
    if (email !== null) {
      set(el.fieldEmailPresident, email)
    }
    waitElement(el.fieldDateStartTermPresident)
    if (dateStar !== null) {
      set(el.fieldDateStartTermPresident, dateStar)
    }
    waitElement(el.fieldDateStartTermPresident)
    if (dateStar !== null) {
      set(el.fieldDateStartTermPresident, dateStar)
    }
    waitElement(el.fieldPresidentialElectionDate)
    if (dateElection !== null) {
      set(el.fieldPresidentialElectionDate, dateElection)
    }
    waitElement(el.fieldDateEndsPresidentMandate)
    if (dateEnd !== null) {
      set(el.fieldDateEndsPresidentMandate, dateEnd)
    }
  },

  fillInDirectorData(name) {
    waitElement(el.fieldNameDirector)
    if (name !== null) {
      set(el.fieldNameDirector, name)
    }
  },

  clickButtonSearchCPFDirector() {
    waitElement(el.searchDirectorButton)
    click(el.searchDirectorButton)
    waitElement(el.titleModalInfo)
    click(el.btnConfirmModal)
  },

  modality() {
    cy.get(el.modality).check()

  },

  saveDataClub() {
    waitElement(el.agreeSaveButton)
    click(el.agreeSaveButton)
  },

  invalidFieldCNPJ(CNPJ) {
    fillField(el.fieldCNPJ, CNPJ);
    // clickButtonSearchCNPJ()
    // waitElement(el.invalidFeedback)
    // 
  },

  validateMessage(text) {
    return get_text(el.invalidFeedback, text)
  },
}

