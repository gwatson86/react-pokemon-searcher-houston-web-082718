import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    filter: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({pokemon})
    }) 
  }

  onSearchChange = event => {
    this.setState({
      filter: event.target.value
    });
  }

  addPokemon = pokemon => {
    this.setState({
      pokemon: [...this.state.pokemon, pokemon]
    })
  }

  render() {
    const filteredPokemon = this.state.pokemon.filter(poke => {
      return poke.name.includes(this.state.filter)
    });

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={filteredPokemon}/>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
