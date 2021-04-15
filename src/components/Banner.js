import React, { useState, useEffect } from 'react';
import '../styles/Home.css'

function Banner () {
    return (
        <div>
            <div className="div-block-12">
                    <div className="div-block-13">
                        <p className="paragraph">Hello, User!</p>
                    </div>
                    <div className="div-block-14"><img src="https://uploads-ssl.webflow.com/604a6813a162378e38db0196/604eac55260c2c7cd7b9d052_216496-512.png" loading="lazy" width="25" height="25" alt="" className="image" /></div>
                    <div className="div-block-14"><img src="https://uploads-ssl.webflow.com/604a6813a162378e38db0196/604eac5572b9ab43f45da549_216477-512.png" loading="lazy" width="25" height="25" alt="" className="image" /></div>
                </div>
                <div className="div-block-10">
                    <h1 className="heading-12">Punch-In.</h1> </div>
                <div className="div-block">
                    <div className="div-block-2">
                        <div className="div-block-5"> <a href="/" aria-current="page" className="button-3 w-button w--current">Home</a> </div>
                        <div className="div-block-5"> <a href="/about" className="button-3 w-button">About</a> </div>
                        <div className="div-block-5"> <a href="/reservations" className="button-3 w-button">Reservations</a> </div>
                        <div className="div-block-5"> <a href="/inventory" className="button-3 w-button">Inventory</a> </div>
                        <div className="div-block-5"> <a href="/login" className="button-3 w-button">Log In/Sign Up</a> </div>
                    </div>
                </div>
        </div>
    )
}

export default Banner