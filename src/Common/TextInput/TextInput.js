import React, { Component } from 'react'
import './TextInput.css'

export default class TextInput extends Component {

    constructor(props) {
        super(props); //id, onChange, label, value, isRequired, placeholder, type
        this.state = {
            touched: false, error: '', class: '', value: ''
        }

        this.textInput = React.createRef();
    }

    focus = () => {
        this.textInput.current.focus();
    }

    onValueChanged = (event) => {
        let [error, validClass, value] = ["", "", event.target.value];

        [error, validClass] = (!value && this.props.required) ?
            ["Value cannot be empty", "is-invalid"] : ["", "is-valid"]

        this.props.onChange({ value: value, error: error });

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
                    ref={this.textInput}
                    onChange={this.onValueChanged}
                    className={"form-control " + this.state.class}
                    id={`id_${this.props.label}`}
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