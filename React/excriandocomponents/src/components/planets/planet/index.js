import GrayImg from "../../shared/gray_image";
import DescriptionWithLink from "../../shared/DescripitionWithLink";
const Planet = (props) => {
    let title;
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
        </div>
    );
}

export default Planet;