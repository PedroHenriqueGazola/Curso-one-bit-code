import GrayImg from "../../shared/gray_image";

const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
            <GrayImg img_url = {props.img_url}/>
        </div>
    );
}

export default Planet;