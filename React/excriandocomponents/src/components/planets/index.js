import React, { Fragment } from 'react';
import Planet from "./planet";

export default class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [
        
        ]
      }
    }

  async getPlanets() { 
    //api/plantes.json
      const response = await fetch('api/planets.json');
      const data = await response.json();
      return data;
  }
  componentDidMount() {
    this.getPlanets().then(data => {
      this.setState( state => ({
        planets: data['planets']
      }))
    })
  }

  showPlanet = () => {
    let new_Planets = [...this.state.planets];
    new_Planets.push(new_Planets[new_Planets.length - 1])
    this.setState(state=> ({
      planets: new_Planets
    }))

  }
  removeLast = () => { 
    let new_Planets = [...this.state.planets];
    new_Planets.pop();
    this.setState(state=> ({
      planets: new_Planets
    }))
  
  }
  render() {
    return (
      <Fragment>
        <h1>Lista de planets</h1>
        <button onClick={this.removeLast}>Remover último</button>
        <button onClick={this.showPlanet}>Adicionar planeta</button>
        {this.state.planets.map((planet) => {
          return  <Planet
                  name= {planet.name}
                  text= {planet.text}
                  link= {planet.link}
                  img_url= {planet.img_url}
        />
        }
      )}
        
      </Fragment>
      // um conteudo html sempre deve encapsualdo com um elemento <>, ou div por exemplo
    );
  }
}



