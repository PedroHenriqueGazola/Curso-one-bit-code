import './index.css';
//import ImgArq from './img.js';

const Imagens = (props) => {
  const backgroundImg = {
    backgroundImage: props.img,
  }
  return (
    <div id='imgflor' style={backgroundImg}>
      <p id='pimg'>
        {props.text}
      </p>
    </div>
    )
}

export default Imagens;