import React, { useState, useEffect } from 'react';
import '../styles/All.css'
import axios from 'axios';

function Inventory () {

    const [items, setItems] = useState([])

    async function inventory(){
        var response = await axios.post("http://18.221.103.54:5000/getItems")
        setItems(response.data)
    }

    inventory()

    return (
        <div className="body">
            <div className="div-block-8">
                <h1 className="heading-5">Inventory</h1>
                <div className="div-block-11">
                <div className="html-embed w-embed">
                    <table>
                    <tr>
                        <th>Item</th>
                        <th>Location</th>
                        <th># Left In Stock</th>
                        <th>Add To Cart</th>
                    </tr>
                    <tr>
                        <td>5lb Dumbell</td>
                        <td>Stonehill College</td>
                        <td>5</td>
                        <td><input type="button" value="Add" /></td>
                    </tr>
                    <tr>
                        <td>10lb Dumbell</td>
                        <td>Stonehill College</td>
                        <td>7</td>
                        <td><input type="button" value="Add" /></td>
                    </tr>
                    <tr>
                        <td>15lb Dumbell</td>
                        <td>Stonehill College</td>
                        <td>0</td>
                        <td><input type="button" value="Restock" /></td>
                    </tr>
                    <tr>
                        <td>20lb Dumbell</td>
                        <td>Stonehill College</td>
                        <td>2</td>
                        <td><input type="button" value="Add" /></td>
                    </tr>
                    <tr>
                        <td>25lb Dumbell</td>
                        <td>Stonehill College</td>
                        <td>5</td>
                        <td><input type="button" value="Add" /></td>
                    </tr>
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