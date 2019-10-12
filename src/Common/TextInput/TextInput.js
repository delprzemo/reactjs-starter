import React, { Component, useState } from 'react'
import './TextInput.css'


function TextInput(props) {
    const [touched, setTouch] = useState(false);
    const [error, setError] = useState('');
    const [htmlClass, setHtmlClass] = useState('');
    const [value, setValue] = useState('');


    function onValueChanged(event) {
        let [error, validClass, value] = ["", "", event.target.value];

        [error, validClass] = (!value && props.required) ? 
            ["Value cannot be empty", "is-invalid"] : ["", "is-valid"]

        props.onChange({value: value, error: error});

        setTouch(true);
        setError(error);
        setHtmlClass(validClass);
        setValue(value);
    }

    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                value={props.value}
                type={props.type}
                onChange={onValueChanged}
                className={"form-control " + htmlClass}
                id={`id_${props.label}`}
                placeholder={props.placeholder} />
            {error ?
                <div className="invalid-feedback">
                    {error}
                </div> : null
            }
        </div>
    )
}

export default TextInput;