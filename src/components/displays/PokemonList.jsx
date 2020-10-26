// PokemonList display component goes here - list name and image for each PokemonItem
import React from 'react'
import propTypes from 'prop-types'
import PokemonItem from './PokemonItem'
import styles from './PokemonList.css'

export default function PokemonList({ pokemonData }) {
  return pokemonData.map(pokemon => (
    <div>
      {/* Spread pokemon props */}
      <PokemonItem key={pokemon._id} {...pokemon} />
    </div>
  ))
}

PokemonItem.propTypes = {
  pokemonData: propTypes.arrayOf(propTypes.shape({
    pokemon: propTypes.string.isRequired,
    url_image: propTypes.string.isRequired
  }))
}
