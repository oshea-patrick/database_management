import React, { useState, useEffect } from 'react';
import '../styles/All.css'
import { useHistory } from "react-router-dom";

function Banner (props) {
    const history = useHistory()

    function navigate(loc) {
        history.push(loc, null)
    }

    return (
        <div>
            <div className="div-block-12">
                    <div className="div-block-13">
                        <p className="paragraph">Hello, {props.name}!</p>
                    </div>
                    <div className="div-block-14"><img src="https://uploads-ssl.webflow.com/604a6813a162378e38db0196/604eac55260c2c7cd7b9d052_216496-512.png" loading="lazy" width="25" height="25" alt="" className="image" /></div>
                    <div className="div-block-14"><img src="https://uploads-ssl.webflow.com/604a6813a162378e38db0196/604eac5572b9ab43f45da549_216477-512.png" loading="lazy" width="25" height="25" alt="" className="image" /></div>
                </div>
                <div className="div-block-10">
                    <h1 className="heading-12">Punch-In.</h1> </div>
                <div className="div-block">
                    <div className="div-block-2">
                        <div className="div-block-5"> <div onClick={() => {navigate('/home')}}  className="button-3 w-button w--current">Home</div> </div>
                        <div className="div-block-5"> <div onClick={() => {navigate('/about')}} className="button-3 w-button">About</div> </div>
                        <div className="div-block-5"> <div onClick={() => {navigate('/reservations')}} className="button-3 w-button">Reservations</div> </div>
                        <div className="div-block-5"> <div onClick={() => {navigate('/inventory')}} className="button-3 w-button">Inventory</div> </div>
                        <div className="div-block-5"> <div onClick={() => {navigate('/login')}} className="button-3 w-button">Log In/Sign Up</div> </div>
                    </div>
                </div>
        </div>
    )
}

export default Banner