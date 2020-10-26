// test that a list of pokemon renders using the PokemonItem component 
import React from 'react'
import { render } from '@testing-library/react'
import PokemonItem from './PokemonItem'
import PokemonList from './PokemonList'

const pokemonData = [{
  "_id": "5cef3501ef6005a77cd4fd16",
  "pokemon": "venusaur",
  "id": 3,
  "species_id": 3,
  "height": 20,
  "weight": 1000,
  "base_experience": 236,
  "type_1": "grass",
  "type_2": "poison",
  "attack": 82,
  "defense": 83,
  "hp": 80,
  "special_attack": 100,
  "special_defense": 100,
  "speed": 80,
  "ability_1": "overgrow",
  "ability_2": "NA",
  "ability_hidden": "chlorophyll",
  "color_1": "#78C850",
  "color_2": "#A040A0",
  "color_f": "#81A763",
  "egg_group_1": "monster",
  "egg_group_2": "plant",
  "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  "generation_id": 1,
  "evolves_from_species_id": "2",
  "evolution_chain_id": 1,
  "shape_id": 8,
  "shape": "quadruped",
  "pokebase": "venusaur",
  "pokedex": "http://www.pokemon.com/us/pokedex/venusaur"
},
{
  "_id": "5cef3501ef6005a77cd4fd17",
  "pokemon": "bulbasaur",
  "id": 1,
  "species_id": 1,
  "height": 7,
  "weight": 69,
  "base_experience": 64,
  "type_1": "grass",
  "type_2": "poison",
  "attack": 49,
  "defense": 49,
  "hp": 45,
  "special_attack": 65,
  "special_defense": 65,
  "speed": 45,
  "ability_1": "overgrow",
  "ability_2": "NA",
  "ability_hidden": "chlorophyll",
  "color_1": "#78C850",
  "color_2": "#A040A0",
  "color_f": "#81A763",
  "egg_group_1": "monster",
  "egg_group_2": "plant",
  "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  "generation_id": 1,
  "evolves_from_species_id": "NA",
  "evolution_chain_id": 1,
  "shape_id": 8,
  "shape": "quadruped",
  "pokebase": "bulbasaur",
  "pokedex": "http://www.pokemon.com/us/pokedex/bulbasaur"
}]

describe('Tests PokemonList component', () => {
  it('should render a list of pokemon to the page', () => {
    const { asFragment } = render(<PokemonList
      pokemonData={pokemonData} key={pokemonData.pokemon}
    />)

    expect(asFragment()).toMatchSnapshot();
  })
})
