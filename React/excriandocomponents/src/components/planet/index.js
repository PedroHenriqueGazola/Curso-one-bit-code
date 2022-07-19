import GrayImg from "../shared/gray_image";
import DescriptionWithLink from "../shared/DescripitionWithLink";
import React, {useState, useEffect } from 'react';
import Form from './form';
import { useParams, useNavigate } from 'react-router-dom';

async function getPlanet(id) {
    const response = await fetch(`api/${id}.json`);
    const data = await response.json();
    return data;
}

const  Planet = () =>   {
    
    const [satellites, setSatellites] = useState([]);
    const [planet, setPlanet] = useState({});
    let { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPlanet(id).then(data => {
            setSatellites(data['satellites'])
            setPlanet(data['data'])
        })
    }, [id]) ;

    const goToPlanet = () => {
        navigate('/')
    }

    const addSatellite = (new_satellite) => {
        setSatellites([...satellites, new_satellite])
    }
    let title = <h4>{planet.name}</h4>
    
    return (
        <div>
            {title}
            <DescriptionWithLink text = {planet.text} link = {planet.link} />
            <GrayImg img_url = {planet.img_url} gray = {planet.gray}/>
            <h4>Satellites</h4>
            <Form addSatellite= {addSatellite}/>
            <ul>
                {satellites.map((satellite, index) => {
                    return <li key={index}>{satellite.name}</li>
                    }
                    
                )}
            </ul>
                
            <hr/>
            <button type="button" onClick={goToPlanet}>Back to planets</button>
        </div>

    )
}

export default Planet;