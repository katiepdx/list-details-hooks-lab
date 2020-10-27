import React, { useState, useEffect } from 'react'
import { getAllPokemon } from '../Services/api-fetch'
import PokemonList from '../components/displays/PokemonList'
import styles from './PokemonContainer.css'

export default function PokemonContainer() {
  // loading state - default is true
  const [loading, setLoading] = useState(true)

  // allPokemon state - initialize as empty array
  const [pokemonData, setPokemonData] = useState([])

  // useEffect (like component did mount) for pokemon data. Pass empty array as second argument to avoid infinite loop!
  useEffect(async () => {
    // make fetch to api for all pokemon 
    const pokemonData = await getAllPokemon()

    // set pokemonData to state using setPokemonData
    setPokemonData(pokemonData)

    // update loading state to false now that we have the pokemonData 
    setLoading(false)

  }, [])

  if (loading) return (<p data-testid="loading">Your content is loading...</p>)

  else return (
    <div>
      <div className={styles.pokemonItemBox} data-testid="pokemon-list">
        <PokemonList pokemonData={pokemonData} />
      </div>
    </div>
  )
}
