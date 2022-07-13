import React, { Fragment } from 'react';
import Planet from "./planet";

export default class Planets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: [
        {
          name: "Mercurio",
          text: "Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. ",
          link: "https://pt.wikipedia.org/wiki/Mercúrio_(planeta)",
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1024px-Mercury_in_color_-_Prockter07-edit1.jpg",
        },
        {
          name:"Terra",
          text:" A terra é o único planeta do Sistema Solar que não é um anel, e é o único que tem uma órbita circular.",
          link:"https://pt.wikipedia.org/wiki/Terra",
          img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg"
        },
        {
          name: "Saturno",
          text: "Saturno é o quinto planeta do Sistema Solar, e o maior dos quatro aneis. ",
          link: "https://pt.wikipedia.org/wiki/Saturno",
          img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg",
        }
        ]
      }
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


