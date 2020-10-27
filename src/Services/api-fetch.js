export const getAllPokemon = async () => {
  const data = await fetch('https://alchemy-pokedex.herokuapp.com/api/pokedex')
  const json = await data.json()
  const pokemonData = json.results
  return pokemonData
}

export const getByPokemonId = async (pokemonId) => {
  const data = await fetch(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${pokemonId}`)
  const json = await data.json()
  const onePokemonData = await json
  return onePokemonData
}
