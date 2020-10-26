import React from 'react'
import propTypes from 'prop-types'

export default function PokemonItem({ pokemon, url_image }) {
  return (
    <div key={pokemon}>
      PokemonItem Page
      <p>Pokemon: {pokemon}</p>
      <p>{url_image}</p>
    </div>
  )
}

PokemonItem.propTypes = {
  pokemon: propTypes.string.isRequired,
  url_image: propTypes.string.isRequired
}
