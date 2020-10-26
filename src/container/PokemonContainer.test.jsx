import React from 'react'
import { render, screen } from '@testing-library/react'
import { getAllPokemon } from '../services/api-fetch'
import PokemonContainer from './PokemonContainer'

// jest.mock api call
jest.mock('../services/api-fetch')
const mockData = [{
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
},
{
  "_id": "5cef3501ef6005a77cd4fd18",
  "pokemon": "venusaur-mega",
  "id": 4,
  "species_id": 3,
  "height": 24,
  "weight": 1555,
  "base_experience": 281,
  "type_1": "grass",
  "type_2": "poison",
  "attack": 100,
  "defense": 123,
  "hp": 80,
  "special_attack": 122,
  "special_defense": 120,
  "speed": 80,
  "ability_1": "thick-fat",
  "ability_2": "NA",
  "ability_hidden": "NA",
  "color_1": "#78C850",
  "color_2": "#A040A0",
  "color_f": "#81A763",
  "egg_group_1": "monster",
  "egg_group_2": "plant",
  "url_image": "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png",
  "generation_id": "NA",
  "evolves_from_species_id": "NA",
  "evolution_chain_id": "NA",
  "shape_id": "NA",
  "shape": "NA",
  "pokebase": "venusaur",
  "pokedex": "http://www.pokemon.com/us/pokedex/venusaur"
}]

describe('Tests that the PokemonContainer displays a loading screen on load', () => {
  it('displays a loading screen on page load', () => {
    // mock response from api - used first few pokemon from results
    getAllPokemon.mockResolvedValue(mockData)

    // render pokemon container
    render(<PokemonContainer />)

    // get loading screen by testid
    const loading = screen.getByTestId('loading')

    // expect loading screen to display on page load mount
    expect(loading).toHaveTextContent('Your content is loading...')
  })

  it('displays a list of pokemon to the page', async () => {
    // mock response from api - used first few pokemon from results
    getAllPokemon.mockResolvedValue(mockData)

    // render pokemon container
    render(<PokemonContainer />)

    // get pokemonList by testid
    const pokemonList = await screen.findByTestId('pokemon-list')

    // expect pokemon list not to be empty
    expect(pokemonList).not.toBeEmptyDOMElement()
  })
});
