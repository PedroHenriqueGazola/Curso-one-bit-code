const DescriptionWithLink = (props) => {
    return(
        <div>
            <p>{props.text}</p>
            <a href = {props.link} target = 'blank' >Acessar local do link</a>
        </div>
    )
}

export default DescriptionWithLink;
