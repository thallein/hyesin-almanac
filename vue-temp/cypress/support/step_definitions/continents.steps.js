import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Home from '../pages/home.page'
import Continents from '../pages/continents.page'

Given(/^a user is on the almanac homepage$/, () => {
  Home.goTo()
})

When(/^they go to the "([^"]*)" page$/, (page) =>{
  Home.navigateTo(page)
})

Then(/^the list of continents should be visible$/, () =>{
  Continents.continentListIsVisible()
})
