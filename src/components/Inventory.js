import React, { useState, useEffect, useRef } from 'react';
import '../styles/All.css'
import axios from 'axios';

function Inventory (props) {

    const [items, setItems] = useState([])
    const queried = useRef(false)

    console.log('state change', queried, items.length)

    async function inventory(){
        if (queried.current === true) {
            return
        }
        queried.current = true
        var response = await axios.post("http://18.221.103.54:5000/getItems")
        if (response.data) {
            console.log(response.data)
            setItems(response.data)
        }
    }

    if(items.length == 0){
        inventory()
    }

    return (
        <div className="body">
            <div className="div-block-8">
                <h1 className="heading-5">Inventory</h1>
                <div className="div-block-11">
                <div className="html-embed w-embed">
                <table>
                <thead>
                    <tr>
                    <th>Item</th>
                    <th>Location</th>
                    <th>Left in Stock</th>
                    <th>Check Out</th>
                    </tr>
                </thead>
                <tbody>
               {items.map((elem)=>(
                <tr>
                 <td>{elem.name}</td>
                 <td>{elem.location}</td>
                 <td>{elem.stock }</td>
                 <td><input type="button" value="Checkout"/></td>
                </tr>
               ))}
                </tbody>
                    </table>
                </div>
                </div>
            </div>
            <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=604a6813a162378e38db0196" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
            <script src="js/webflow.js" type="text/javascript"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script>
        </div>
    )
}
export default Inventory