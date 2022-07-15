import GrayImg from "../../shared/gray_image";
import DescriptionWithLink from "../../shared/DescripitionWithLink";
import React, {useState, useEffect } from 'react';

async function getSatellites(id) {
    const response = await fetch(`api/${id}.json`);
    const data = await response.json();
    return data;
}
/*componentDidMount() {
    this.getSatellites(this.props.id).then(data => {
        this.setState(state => ({
            satellites: data['satellites']
        }))
    }
    )
}*/
const  Planet = (props) =>   {
    let title
    const [satellites, setSatellites] = useState([]);
    useEffect(() => {
        getSatellites(props.id).then(data => {
            setSatellites(data['satellites']);
        }
        )
    });
    if(props.titleWithUnderline){
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }
    return (
        <div onClick = {() => {
            props.clickOnPlanet(props.name);
        }}>
            {title}
            <DescriptionWithLink text = { props.text} link = {props.link} />
            <GrayImg img_url = {props.img_url} gray = {props.gray}/>
            <h4>Satellites</h4>
            <ul>
                {satellites.map((satellite, index) => {
                    return <li key={index}>{satellite.name}</li>
                    }
                    
                )}
            </ul>
            

                
            <hr/>
        </div>

    )
}

export default Planet;