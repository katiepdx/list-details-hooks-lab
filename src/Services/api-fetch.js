// fetch from pokemon api

// getAllPokemon -- https://alchemy-pokedex.herokuapp.com/api/pokedex

// getByPokemonId (_id property value) -- https://alchemy-pokedex.herokuapp.com/api/pokedex/:id

export const getAllPokemon = async () => {
  const data = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex')
  const json = await data.json()
  const pokemonData = json.results
  return pokemonData
}
