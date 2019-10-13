import React, { Component, useState, FormEvent, ChangeEvent } from 'react'
import './TextInput.css'

export type TextInputProps = {
    required: boolean, 
    onChange: Function,
    id: string,
    label: string,
    placeholder: string,
    value: string,
    type?: string
}

function TextInput(props: TextInputProps) {
    const [touched, setTouch] = useState(false);
    const [error, setError] = useState('');
    const [htmlClass, setHtmlClass] = useState('');
    const [value, setValue] = useState('');


    function onValueChanged(event: ChangeEvent<HTMLInputElement>) {
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
            <label htmlFor={props.id.toString()}>{props.label}</label>
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