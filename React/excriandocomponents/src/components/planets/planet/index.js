import GrayImg from "../../shared/gray_image";
import DescriptionWithLink from "../../shared/DescripitionWithLink";
//import React, {useState, useEffect } from 'react';

import { Link } from "react-router-dom"

const  Planet = (props) =>   {
    let title
    
    if(props.titleWithUnderline){
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }
    return (
        <div>
            <Link to = {props.id}>{title}</Link>
            <DescriptionWithLink text = {props.text} link = {props.link} />
            <GrayImg img_url = {props.img_url} gray = {props.gray}/>
            <hr/>
        </div>

    )
}

export default Planet;