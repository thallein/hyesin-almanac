const continentsLink = '#nav-continent'

export default class HomePage {
  static goTo () {
    cy.visit('/')
  }

  static navigateTo(page) {
    if (page === 'continents') {
      cy.get(continentsLink).click()
    }
  }
}
