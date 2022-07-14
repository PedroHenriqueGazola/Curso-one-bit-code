import GrayImg from "../../shared/gray_image";
import DescriptionWithLink from "../../shared/DescripitionWithLink";
import React from "react";
class Planet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            satellites: [],
        };  
    }
    async getSatellites(id) {
        const response = await fetch(`api/${id}.json`);
        const data = await response.json();
        return data;
    }
    componentDidMount() {
        this.getSatellites(this.props.id).then(data => {
            this.setState(state => ({
                satellites: data['satellites']
            }))
        }
        )
    }
    render() {
    let title;
    if(this.props.titleWithUnderline){
        title = <h4><u>{this.props.name}</u></h4>
    } else {
        title = <h4>{this.props.name}</h4>
    }
    return (
        <div onClick = {() => {
            this.props.clickOnPlanet(this.props.name);
        }}>
            {title}
            <DescriptionWithLink text = { this.props.text} link = {this.props.link} />
            <GrayImg img_url = {this.props.img_url} gray = {this.props.gray}/>
            <h4>Satellites</h4>
            <ul>
                {this.state.satellites.map((satellite, index) => {
                    return <li key={index}>{satellite.name}</li>
                    }
                    
                )}
            </ul>
            

                
            <hr/>
        </div>

    )}
}

export default Planet;