import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    clicked: false,
    image: this.props.pokemon.sprites.front
  }
  
  setImgSrc = () => {
    this.state.clicked
    ? this.setState({image: this.props.pokemon.sprites.front})
    : this.setState({image: this.props.pokemon.sprites.back})
  }

  toggleClicked = () => {
    this.setState(state => ({
      clicked: !state.clicked
    }))

    this.setImgSrc()
  }


  render() {
    return (
      <Card key={this.props.pokemon.id} onClick={this.toggleClicked}>
        <div>
          <div className="image">
            <img src={this.state.image} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => {return stat.name === "hp"}).value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
