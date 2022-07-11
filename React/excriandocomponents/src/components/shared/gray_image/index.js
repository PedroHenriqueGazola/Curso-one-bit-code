import  './style.css';

const GrayImg = (props) => {
    return (
        <div className="gray-image">
            <img className= {props.gray ? 'img' : 'color_img'} src = {props.img_url} alt=""></img>
        </div>
    );
}

export default GrayImg;