import 'cypress-react-unit-test'
import React from 'react'
import App from '../../src/App'

describe('App', () => {
  it('Displays the title', () => {
    cy.mount(<App/>)
    cy.contains('Rate My Cat')
  })
})