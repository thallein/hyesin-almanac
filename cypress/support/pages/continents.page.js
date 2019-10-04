const continentList = '#continent-list'

export default class ContinentsPage {
  static goTo () {
    cy.visit('/continents')
  }

  static continentListIsVisible() {
    cy.get(continentList).should('be.visible')
  }
}
