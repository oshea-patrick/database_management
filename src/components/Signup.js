import React, { useState, useEffect } from 'react';
import '../styles/All.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Signup () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const history = useHistory();

    function routeChange(email) { 
        let path = `/login`; 
        //passes email and authToken values to props param in table.js
        history.push(path,{email:email});
        }

    async function signup(){
        const obj = {
            'email' : email,
            'first_name' : firstname,
            'last_name' : lastname,
            'password' : password  
        }

        console.log(obj)
        var response = await axios.post("http://18.221.103.54:5000/signup",obj)
        //setters for first/last names
        console.log(response.data[0])
        routeChange(email)
        //console.log(response.data)
        
    }
    return (
            <div className="div-block-6">
                <div className="div-block-7">
                <h1 className="heading-3">Welcome to punch-in!</h1>
                <h3 className="heading-3">Sign Up Below!</h3>
                <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="form">
                    <div><label className="field-label">First Name:</label><input type="text" className="w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2" value={firstname} onChange={(event) => {setFirstName(event.target.value)} }/></div>
                    <div><label className="field-label">Last Name:</label><input type="text" className="w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name" value={lastname} onChange={(event) => {setLastName(event.target.value)} } /></div>
                    <div><label className="field-label">Email Address:</label><input type="text" className="w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3" value={email} onChange={(event) => {setEmail(event.target.value)} }/></div>
                    <div><label className="field-label">Password:</label><input type="text" className="w-input" maxlength="256" name="name-4" data-name="Name 4" placeholder="" id="name-4" value={password} onChange={(event) => {setPassword(event.target.value)} }/></div>
                    <div><label className="field-label">Confirm Password:</label><input type="text" className="w-input" maxlength="256" name="name-5" data-name="Name 5" placeholder="" id="name-5"/></div>
                    <input type="button" value="Sign Up" data-wait="Please wait..." className="submit-button w-button" onClick={() => { signup() } }/>
                    </form>
                    <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
                </div>
            </div>
    )
}

export default Signup