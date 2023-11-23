import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import YodlrApi from "./api";

function UserRegisterForm() {
    const INITIAL_STATE = {
        email: '',
        firstName: '',
        lastName: ''
      };

    const [formData, setFormData] = useState(INITIAL_STATE);
    const history = useHistory()
    
    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    };

    function handleSubmit(evt){
        evt.preventDefault();
        YodlrApi.signup({...formData});
        setFormData(INITIAL_STATE);
        history.push("/")
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail Address</label>
                <input name="email" id="email" onChange={handleChange} type="email"/>
                <br />
                <label htmlFor="firstName">First Name</label>
                <input name="firstName" id="firstName" onChange={handleChange} type="text"/>
                <br />
                <label htmlFor="lastName">Last Name</label>
                <input name="lastName" id="lastName" onChange={handleChange} type="text"/>
                <br />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default UserRegisterForm;