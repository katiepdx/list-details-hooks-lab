// individual pokemon - list a Pokemon name and image

import React from 'react'

export default function PokemonItem({ name, image }) {
  return (
    <div>
      <p>{name}</p>
      <p>{image}</p>
    </div>
  )
}
