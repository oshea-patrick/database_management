import React, { useState, useEffect } from 'react';
import '../styles/All.css'
import { useHistory } from "react-router-dom";

function Home (props) {
    const [count, setCount] = useState(0)
    const [numbers, setNumbers] = useState([0])
    const history = useHistory();

    function increment () {
        setNumbers([...numbers, count + 1])
        setCount(count + 1)
    }

    return (
        <div className="body">
            <h1>Hello {count} </h1>
            <input type="button" onClick={ () => { increment() }} value="Click Me"/>
            {numbers.map((number) => (
            <div>
                <strong className="glow">{number}</strong>
                <br/>
            </div>
            ))
            }
            <div className="div-block-4">
                <h1 className="heading">Welcome to punch-in!<br/>How can we help<br/>you?</h1> <a href="/inventory" className="button">Inventory</a> <a href="/reservations" className="button">Reservations</a>
            </div>
            <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=604a6813a162378e38db0196" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossOrigin="anonymous"></script>
            <script src="js/webflow.js" type="text/javascript"></script>
        </div>
    )
}

export default Home;