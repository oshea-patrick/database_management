import React, { useState, useEffect } from 'react';
import '../styles/All.css'

function Reservations () {
    return (
        <div className="body">
            <div className="div-block-8">
                <h1 className="heading-5">Reservations</h1>
                <div className="div-block-11">
                <div className="html-embed w-embed">
                    <table>
                        <thead>
                            <tr>
                                <th>Time Block</th>
                                <th>Location</th>
                                <th>Spots Available</th>
                                <th>Enrolled</th>
                                <th>Enroll</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8:00AM-9:00AM</td>
                                <td>Spoco 001</td>
                                <td>5</td>
                                <td>Patrick O'Shea<br/>-----<br/>-----<br/>-----<br/>-----</td>
                                <td><input type="button" value="Enroll" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=604a6813a162378e38db0196" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
            <script src="js/webflow.js" type="text/javascript"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script>
        </div>

    )
}

export default Reservations