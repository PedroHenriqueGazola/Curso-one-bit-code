const DescriptionWithLink = (props) => {
    if (!props.text) {  // se nao tiver descriçao, nao mostra o componente
        return null;
    }
    if(props.link){
        return(
            <div>
                <p>{props.text}</p>
                <a href = {props.link} target = 'blank' >Acessar local do link</a>
            </div>
        )
    } else {
        return(
            <p><u>{props.text}</u></p>
        )
    }
}

export default DescriptionWithLink;
