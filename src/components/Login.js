import React, { useState, useEffect } from 'react';
import '../styles/All.css'

function Login () {
    return (
        <div className="body">
            <div className="div-block-6">
                <div className="div-block-7">
                <h1 className="heading-3">Welcome Back!</h1>
                <div className="w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="form">
                        <label className="field-label">Email Address:</label>
                        <input type="text" className="w-input"name="name" data-name="Name" placeholder="" id="name" />
                        <label className="field-label-2">Password</label>
                        <input type="email" className="w-input" name="email" data-name="Email" placeholder="" id="email" required="" />
                        <input type="submit" value="Sign In" data-wait="Please wait..." className="submit-button w-button" />
                    </form>
                </div>
                </div>
                <div className="text-block">Don&#x27;t have an account with us yet?<br/>No Problem!<br/>Click <a href="/sign-up">here</a> to register!</div>
            </div>
            <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=604a6813a162378e38db0196" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
            <script src="js/webflow.js" type="text/javascript"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script>
        </div>
    )
}

export default Login