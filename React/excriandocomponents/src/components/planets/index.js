import React, { Fragment, useState, useEffect } from 'react';
import Planet from "./planet";
import Form from "./form";
async function getPlanets() { 
  //api/plantes.json
    const response = await fetch('api/planets.json');
    const data = await response.json();
    return data;
}
const Planets = () => { 
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets'])
    })
  }, [])
  const addPlanet = (new_Planet) => {
    setPlanets([...planets, new_Planet])
  }
    return (
      <Fragment>
        <h1>Lista de planets</h1>
        <hr/>
        <Form addPlanet={addPlanet}/>
        {planets.map((planet, index) => {
          return  <Planet
                  id  = {planet.id}
                  name= {planet.name}
                  text= {planet.text}
                  link= {planet.link}
                  img_url= {planet.img_url}
                  key = {index}
        />
        }
      )}
        
      </Fragment>
      // um conteudo html sempre deve encapsualdo com um elemento <>, ou div por exemplo
    );
}

export default Planets;

