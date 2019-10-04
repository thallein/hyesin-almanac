Feature: Continents

Scenario: Navigate to the Continents Page
  Given a user is on the almanac homepage
  When they go to the "continents" page
  Then the list of continents should be visible
