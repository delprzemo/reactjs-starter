import React, { Component } from 'react'
import './TextInput.css'

export default class TextInput extends Component {

    constructor(props) {
        super(props); //id, onChange, label, value, isRequired, placeholder
        this.state = {
            touched: false, error: '', class: '', value: ''
        }
    }

    onValueChanged =(event) => {
        let [error, validClass, value] = ["", "", event.target.value];

        if (!value && this.props.required) {
            error = "Value cannot be empty"
            validClass = "is-invalid"
        } else {
            error = ""
            validClass = "is-valid"
        }

        this.props.onChange({value: value, error: error});

        this.setState({
            touched: true,
            error: error,
            class: validClass,
            value: value
        })
    }

    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type="text"
                    value={this.props.value}
                    onChange={this.onValueChanged}
                    className={"form-control " + this.state.class}
                    id="inputEmail4"
                    placeholder={this.props.placeholder} />
                {this.state.error ?
                    <div className="invalid-feedback">
                        {this.state.error}
                    </div> : null
                }
            </div>
        )
    }
}
