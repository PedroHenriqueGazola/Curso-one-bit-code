import  './style.css';

const GrayImg = (props) => {
    return (
        <div className="gray-image">
            <img class= "img" src = {props.img_url} alt=""></img>
        </div>
    );
}

export default GrayImg;