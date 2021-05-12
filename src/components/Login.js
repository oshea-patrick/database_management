import React, { useState, useEffect, useRef } from 'react';
import '../styles/All.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Login (props) {
    // creates getter and setter methods
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const alert1= useRef(false)

    const history = useHistory();

    function routeChange(email) { 
    let path = `/Home`; 
    history.push(path,{email:email});
    }

    if (props.location.state && props.location.state.alert && !alert1.current) {
        alert('Please log in to use that feature...')
        alert1.current = true
    }


    async function login(){
        const obj = {
            'email' : email,
            'first_name' : firstname,
            'last_name' : lastname,
            'password' : password  
        }
        //console.log(obj)
        var response = await axios.post("http://18.221.103.54:5000/getUser",obj)
        //setters for first/last names
        if(response.data[0] == true)
        {
            if (response.data[1].password === password) {
                props.setName(response.data[1].first_name + " " + response.data[1].last_name)
                props.setEmail(email)
                props.setLogin(true)
                routeChange(email)
            }
            else {
                setPassword('')
                alert('Incorrect Password')
            }
        }
        //console.log(response.data)
    }
    return (
        <div className="body">
            <div className="div-block-6">
                <div className="div-block-7">
                <h1 className="heading-3">Welcome Back!</h1>
                <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="form">
                        <label className="field-label">Email Address:</label>
                        <input type="text" className="w-input"name="name" data-name="Name" placeholder="" id="name" value={email} onChange={(event) => {setEmail(event.target.value)} } />
                        <label className="field-label-2">Password:</label>
                        <input type="email" className="w-input" name="email" data-name="Email" placeholder="" id="email" required="" value={password} onChange={(event) => {setPassword(event.target.value)} }/>
                        <input type="button" value="Sign In" data-wait="Please wait..." className="submit-button w-button" onClick={() => { login() } }/>
                    </form>
                </div>
                </div>
                <div className="text-block">Don&#x27;t have an account with us yet?<br/>No Problem!<br/>Click <p style={{color : 'blue', cursor : 'pointer'}} onClick={() => {history.push('/signup', null)}}>here</p> to register!</div>
            </div>
            <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=604a6813a162378e38db0196" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
            <script src="js/webflow.js" type="text/javascript"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script>
        </div>
    )
}

export default Login