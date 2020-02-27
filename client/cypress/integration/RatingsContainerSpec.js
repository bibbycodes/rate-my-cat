import 'cypress-react-unit-test'
import React from 'react'
import RatingsContainer from '../../src/Components/RatingsContainer'

describe('Ratings container', () => {
  it('Displays the Header', () => {
    cy.mount(<RatingsContainer/>)
    cy.contains('Rate My Cat')
  })
})