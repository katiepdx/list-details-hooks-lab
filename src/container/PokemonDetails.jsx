// list all pokemon details - pokemon, url_image, hp, attack, defense, ability_1,

import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import { getByPokemonId } from '../services/api-fetch'

export default function PokemonDetails({ match }) {
  // loading state - default is true
  const [loading, setLoading] = useState(true)

  // pokemon data state - initialize as an empty array
  const [pokemonData, setPokemonData] = useState([])

  // useEffect (like component did mount) for pokemon detail page.
  useEffect(async () => {
    // get id from params for api fetch
    const pokemonId = match.params.pokemonId;

    // make fetch to api for a specific pokemon using the id 
    const pokemonData = await getByPokemonId(pokemonId)

    console.log(pokemonData, 'DETAILS PAGE')

    // set pokemonData to state using setPokemonData
    setPokemonData(pokemonData)

    // update loading state to false now that we have the pokemonData
    setLoading(false)

  }, [])

  if (loading) return (<p data-testid="loading">Your content is loading...</p>)


  return (
    <div>
      <h1>You chose {pokemonData.pokemon}!</h1>
      <img src={pokemonData.url_image} />
      <p>Pokemon: {pokemonData.pokemon}</p>
      <p>HP: {pokemonData.hp}</p>
      <p>Attack: {pokemonData.attack}</p>
      <p>Defense: {pokemonData.defense}</p>
      <p>Ability: {pokemonData.ability_1}</p>
    </div>
  )
}

PokemonDetails.propType = {
  match: propTypes.object.isRequired
}
