import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    return (
      <Card.Group itemsPerRow={10} pokemon={this.props.pokemon}>
        {this.props.pokemon.map(poke => {
          return <PokemonCard key={poke.id} pokemon={poke} />
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
