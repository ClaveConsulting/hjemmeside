import React, {Component} from "react";
import styled from "styled-components";
import {COLOR_CLAVE_PEACH} from "../../colors";
import "./form.css"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navn: '',
            Epost: '',
            Melding: '',
            nameValid: false,
            emailValid: false,
            messageValid: false,
            formValid: false,
            namePlaceholder: 'Navn',
            emailPlaceholder: 'Epost',
            messagePlaceholder: 'Melding',
            nameIsChanged: false,
            emailIsChanged: false,
            messageIsChanged: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => {
                this.validateField(name, value)
            });
    };

    validateField(fieldName, value) {
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let messageValid = this.state.messageValid;

        switch (fieldName) {
            case 'Epost':
                if(value.length > 0 ) {
                    emailValid = value.match(/.+@.+/);
                }
                this.setState({emailIsChanged: true});
                break;
            case 'navn':
                nameValid = value.length > 0;
                this.setState({nameIsChanged: true});
                break;
            case 'Melding':
                messageValid = value.length > 0;
                this.setState({messageIsChanged: true});
                break;
            default:
        }
        this.setState({
            nameValid: nameValid,
            emailValid: emailValid,
            messageValid: messageValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid});
    }

    changeNamePlaceholder() {
        let nameValid = this.state.nameValid;
        if(!nameValid){
            this.setState({namePlaceholder: 'Vi må vite hvem du er'});
        }
    }

    changeMessagePlaceholder() {
        let messageValid = this.state.messageValid;
        if(!messageValid){
            this.setState({messagePlaceholder: 'Hva er du nysgjerrig på?'});
        }
    }

    changeEmailPlaceholder() {
        let emailValid = this.state.emailValid;
        if(!emailValid){
            this.setState({emailPlaceholder: 'Vi trenger eposten din for å svare deg', Epost: ''});
        }
    }

    render() {
        return (
            <form name="message" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="message"/>
                    <CustomInput
                        name="navn"
                        className={this.state.nameIsChanged && !this.state.nameValid ? "error" : ""}
                        value={this.state.navn}
                        placeholder={this.state.namePlaceholder}
                        type="text"
                        onChange={this.handleUserInput.bind(this)}
                        onBlur={this.changeNamePlaceholder.bind(this)}
                    />
                <br/>
                    <CustomInput
                        name="Epost"
                        className={this.state.emailIsChanged && !this.state.emailValid ? "error" : ""}
                        value={this.state.Epost}
                        placeholder={this.state.emailPlaceholder}
                        type="text"
                        onChange={this.handleUserInput.bind(this)}
                        onBlur={this.changeEmailPlaceholder.bind(this)}
                    />
                <br/>
                    <CustomInput
                        name="Melding"
                        className={this.state.messageIsChanged && !this.state.messageValid ? "error" : ""}
                        value={this.state.Melding}
                        placeholder={this.state.messagePlaceholder}
                        type="text"
                        onChange={this.handleUserInput.bind(this)}
                        onBlur={this.changeMessagePlaceholder.bind(this)}
                    />
                <br/>
                <CustomSubmit
                    value="Send"
                    type="submit"
                    disabled={!this.state.formValid}
                    className={this.state.formValid ? "pointer" : ""}
                />
            </form>
        )
    }
}

const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  color: ${COLOR_CLAVE_PEACH};
  box-sizing: border-box;
  font-size: 18px;
  height: 50px;
  padding: 10px 0;
  position: relative;
  top: 50%;
  width: 100%;
`;
const CustomSubmit = styled.input`
  margin-top: 1rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.1em solid #ccc;
  color: ${COLOR_CLAVE_PEACH};
  box-sizing: border-box;
  font-size: 23px;
  height: 50px;
  padding: 1rem 0 0 0;
  position: relative;
  top: 50%;
`;

export default Form;