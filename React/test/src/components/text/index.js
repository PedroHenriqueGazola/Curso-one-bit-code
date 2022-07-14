import './text.css';

const text = (props) => {
  return (
    <div id='text'>
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default text;
