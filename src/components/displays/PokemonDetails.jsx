// list all pokemon details - pokemon, url_image, hp, attack, defense, ability_1,

import React from 'react'
import propTypes from 'prop-types'

export default function PokemonDetails({ pokemon, hp, attack, defense, ability_1, url_image }) {
  return (
    <div>
      PokemonDetails page
      <p>Pokemon: {pokemon}</p>
      <p>HP: {hp}</p>
      <p>Attack: {attack}</p>
      <p>Defense: {defense}</p>
      <p>Ability: {ability_1}</p>
      <p>Image: {url_image}</p>
    </div>
  )
}

PokemonDetails.propType = {
  pokemon: propTypes.string.isRequired,
  hp: propTypes.number.isRequired,
  attack: propTypes.number.isRequired,
  defense: propTypes.number.isRequired,
  ability_1: propTypes.string.isRequired,
  url_image: propTypes.string.isRequired
}
