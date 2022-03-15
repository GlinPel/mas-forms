import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [repeatPassword, setRepeatPassword] = useState("");


    
    return(
        <div className="container">
            <h2>Formulario con Bonus Sensei</h2>
            <form className="form">
                <div className="form_block">
                    <label className="label_form">First Name: </label> 
                    <input className="input_form" type="text" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                {(firstName.length < 3 && firstName !== "") ? <p className="text-error">Firt Name must be at least 2 characters.</p> : null}   
                <div className="form_block">
                    <label className="label_form">Last Name: </label> 
                    <input className="input_form" type="text" onChange={ (e) => setLastname(e.target.value) } />
                </div>
                {(lastname.length < 3 && lastname !== "") ? <p className="text-error">Last Name must be at least 2 characters.</p> : null}
                <div className="form_block">
                    <label className="label_form">Email Address: </label> 
                    <input className="input_form" type="text" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                {(email.length < 3 && email !== "") ? <p className="text-error">Last Name must be at least 2 characters.</p> : null}
                <div className="form_block">
                    <label className="label_form">Password: </label>
                    <input className="input_form" type="text" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                {(password.length < 9 && password !== "") ? <p className="text-error">Last Name must be at least 8 characters.</p> : null}
                <div className="form_block">
                    <label className="label_form">Confirm Password: </label>
                    <input className="input_form" type="text" onChange={ (e) => setRepeatPassword(e.target.value) } />
                </div>
                {repeatPassword !== password && <p className="text-error">Password must match.</p>}
            </form>
        </div>
        
    );
};
    
export default UserForm;