import React from 'react'
import propTypes from 'prop-types'

export default function PokemonItem({ name, image }) {
  return (
    <div>
      <p>{name}</p>
      <p>{image}</p>
    </div>
  )
}

PokemonItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired
}
