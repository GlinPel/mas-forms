import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [repeatPassword, setRepeatPassword] = useState("");  
    
    return(
        <form className="form">
            <div className="form_block">
                <label className="label_form">First Name: </label> 
                <input className="input_form" type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className="form_block">
                <label className="label_form">Last Name: </label> 
                <input className="input_form" type="text" onChange={ (e) => setLastname(e.target.value) } />
            </div>
            <div className="form_block">
                <label className="label_form">Email Address: </label> 
                <input className="input_form" type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className="form_block">
                <label className="label_form">Password: </label>
                <input className="input_form" type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className="form_block">
                <label className="label_form">Confirm Password: </label>
                <input className="input_form" type="text" onChange={ (e) => setRepeatPassword(e.target.value) } />
            </div>
            <div>
                <h4>Your form data</h4>
                <p>firstName: {firstName}</p>
                <p>lastname: {lastname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password: {repeatPassword}</p>
            </div>
        </form>
    );
};
    
export default UserForm;