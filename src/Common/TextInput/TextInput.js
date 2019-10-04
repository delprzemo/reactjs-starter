import React, { Component } from 'react'
import './TextInput.css'

export default class TextInput extends Component {

    constructor(props) {
        super(props); //id, onChange, label, value, isRequired, placeholder, type
        this.state = {
            touched: false, error: '', class: '', value: ''
        }
    }

    onValueChanged =(event) => {
        let [error, validClass, value] = ["", "", event.target.value];

        [error, validClass] = (!value && this.props.required) ? 
            ["Value cannot be empty", "is-invalid"] : ["", "is-valid"]

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
                <input
                    value={this.props.value}
                    type={this.props.type}
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