let el = require('../elements/loginElements').loginPage
const { loadPage, waitElement, clickRemoveTarget } = require('../actions')

export default {
  accessPage() {
    loadPage('/')
  },

  validateLoginPage() {
    return waitElement(el.title)
  },

  clickButton() {
    waitElement(el.btnRegister)
    clickRemoveTarget(el.btnRegister)
  }
}