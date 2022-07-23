import { useState, Fragment } from "react";

const initialState = {
    name: "",
    text: "",
    link: "",
    img_url: "",
}

const Form = props => {
    const [fields, setfields] = useState(initialState);

    const handleFieldsChange = e => setfields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });

    const handleSubmit = event => {
        props.addPlanet(fields);
        event.preventDefault();
        setfields(initialState);
    }

    return (
    <Fragment>
        <form onSubmit={handleSubmit}> 
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" value={fields.name} onChange = {handleFieldsChange}/>
            </div>
            <div>
                <label htmlFor="text">Descriçao: </label>
                <input type="text" id="text" name="text" value={fields.text} onChange = {handleFieldsChange}/>
            </div>
            <div>
                <label htmlFor="link">Link: </label>
                <input type="text" id="link" name="link" value={fields.link} onChange = {handleFieldsChange}/>
            </div>
            <div>
                <label htmlFor="img_url">Imagem: </label>
                <input type="text" id="img_url" name="img_url" value={fields.img_url} onChange = {handleFieldsChange}/>
            </div>
            <input type={"submit"}/>

        </form>

    </Fragment>
    )
}

export default Form