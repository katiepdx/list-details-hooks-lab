import React from 'react'
import propTypes from 'prop-types'
import './PokemonItem.css'
export default function PokemonItem({ pokemon, url_image }) {
  return (
    <div key={pokemon}>
      <p>Pokemon: {pokemon}</p>
      <img src={url_image} />
    </div>
  )
}

PokemonItem.propTypes = {
  pokemon: propTypes.string.isRequired,
  url_image: propTypes.string.isRequired
}
