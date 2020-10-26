// test that the details for one pokemon renders to the page

import React from 'react'
import { render } from '@testing-library/react'
import PokemonDetails from './PokemonDetails'

describe('Tests PokemonDetails component', () => {
  it('should render the details for one pokemon to the page', () => {
    const { asFragment } = render(<PokemonDetails
      pokemon="Pokemon Name"
      hp={5}
      attack={200}
      defense={100}
      ability="overgrow"
      url_image="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
      key="Pokemon Name"
    />)

    expect(asFragment()).toMatchSnapshot();
  })
})
