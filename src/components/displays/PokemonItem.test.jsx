// tests that a pokemon item renders to the screen using test data

import React from 'react'
import { render } from '@testing-library/react'
import PokemonItem from './PokemonItem'

describe('Tests PokemonItem component', () => {
  it('should render a list item to the page', () => {
    const { asFragment } = render(<PokemonItem
      name="venusaur"
      image="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
    />)

    expect(asFragment()).toMatchSnapshot();
  })
})
