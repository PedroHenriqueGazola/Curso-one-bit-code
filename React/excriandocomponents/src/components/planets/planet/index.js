import GrayImg from "../../shared/gray_image";
import DescriptionWithLink from "../../shared/DescripitionWithLink";
const Planet = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <DescriptionWithLink text = { props.text} link = {props.link} />
            <GrayImg img_url = {props.img_url}/>
        </div>
    );
}

export default Planet;