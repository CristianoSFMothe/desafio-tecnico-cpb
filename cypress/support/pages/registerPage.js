let el = require('../elements/registarElements').registerPage
const { loadPage, waitElement, click, set, get_text, fillField } = require('../actions')

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
    waitElement(el.searchPresidentButton)
    click(el.searchCNPJButton)
    waitElement(el.titleModalInfo)
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
  },

  fielPhone(phone) {
    click(el.fieldPhone)
    if (phone !== null) {
      set(el.fieldPhone, phone)
    }
  },

  fielCep(cep) {
    click(el.fieldCEP)
    if (cep !== null) {
      set(el.fieldCEP, cep)
    }
  },

  fielAddress(address) {
    click(el.fieldAddress)
    if (address !== null) {
      set(el.fieldAddress, address)
    }
  },

  fielAddressNumber(number) {
    click(el.fieldAddressNumber)
    if (number !== null) {
      set(el.fieldAddressNumber, number)
    }
  },

  fielNeighborhood(neighborhood) {
    click(el.fieldNeighborhood)
    if (neighborhood !== null) {
      set(el.fieldNeighborhood, neighborhood)
    }
  },

  selectState(state) {
    click(el.selectState);
    // if (state !== null) {
    //   pressEnter(el.selectState, state);
    // }
    cy.get(el.selectState).should('be.visible').type(`${state}{enter}`)
  },

  selectCity(city) {
    click(el.selectCity);
    cy.get(el.selectCity).should('be.visible').type(`${city}{enter}`)
  },

  fieldCpf(cpf) {
    click(el.fielCpf)
    if (cpf !== null) {
      set(el.fielCpf, cpf)
    }
  },

  clickButtonSearchCPF() {
    waitElement(el.searchPresidentButton)
    click(el.searchPresidentButton)
    waitElement(el.titleModalInfo)
    click(el.btnConfirmModal)
  },

  fieldNamePresident(name) {
    click(el.fieldNamePresident)
    if (name !== null) {
      set(el.fieldNamePresident, name)
    }
  },

  fieldEmailPresident(email) {
    click(el.fieldEmailPresident)
    if (email !== null) {
      set(el.fieldEmailPresident, email)
    }
  },

  fieldDateStartPresident(dateStar) {
    click(el.fieldDateStartTermPresident)
    if (dateStar !== null) {
      set(el.fieldDateStartTermPresident, dateStar)
    }
  },

  fieldDateElectionPresident(dateElection) {
    click(el.fieldPresidentialElectionDate)
    if (dateElection !== null) {
      set(el.fieldPresidentialElectionDate, dateElection)
    }
  },

  fieldDateEndPresident(dateEnd) {
    click(el.fieldDateEndsPresidentMandate)
    if (dateEnd !== null) {
      set(el.fieldDateEndsPresidentMandate, dateEnd)
    }
  },

  fieldCpfDirector(cpf) {
    click(el.fieldCpfDirector)
    if (cpf !== null) {
      set(el.fieldCpfDirector, cpf)
    }
  },

  fieldNameDirector(name) {
    click(el.fieldNameDirector)
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

  invalidFieldCNPJ(CNPJ, text) {
    fillField(el.fieldCNPJ, CNPJ);
    // clickButtonSearchCNPJ()
    // waitElement(el.invalidFeedback)
    // 
  }

}

