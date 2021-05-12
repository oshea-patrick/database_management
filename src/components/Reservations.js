import React, { useState, useEffect, useRef } from 'react';
import '../styles/All.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Reservations(props) {
    //getters/setters for the enroll button funtion in the table
    const [email, setEmail] = useState('')
    const [timeblock, setTimeBlock] = useState('')
    const [location, setLocation] = useState('')
    const [address, setAddress] = useState('')
    const [data, setData] = useState([])

    const [reservs, setReservations] = useState([])
    const [registered, setRegistered] = useState([])
    const queried = useRef(false)

    console.log('state update', data.length)

    const history = useHistory()
    const fetch = useRef(true)

    async function reservations(reload=false){
        if (fetch.current === true || reload) {
            fetch.current = false
            var response = await axios.post("http://18.221.103.54:5000/getReservations")
            var response1 = await axios.post("http://18.221.103.54:5000/getRegisteredReservations")
            var n = []
            var item
            var item1
            for (item of response.data){
                var d = {}
                d["count"]=0
                d["emails"]=[]
                d["time_block"]=item.time_block
                d["location"]=item.location
                d["spots_available"]=item.spots_available
                for (item1 of response1.data){
                    if(item1.location_name === item.location){
                        d["address"] = item1.address
                    }
                    if(item1.location_name === item.location && item1.time_block === item.time_block){
                        d["count"]+=1
                        d["emails"].push(item1.email)
                    }
                }
                n.push(d)
            }
            console.log(n)
            setReservations(response.data)
            setRegistered(response1.data)
            setData(n)
    }
    }

    async function enroll(dict) {
        const obj = {
            'email' : props.email,
            'time_block' : dict.time_block,
            'location_name' : dict.location,
            'address' : dict.address 
        }
        var response2 = await axios.post("http://18.221.103.54:5000/joinReservation",obj)
        queried.current = false
        await reservations()

        setEmail(response2.data.email)
        //console.log(response2.data.email)
        setTimeBlock(response2.data.time_block)
        //console.log(response2.data.time_block)
        setLocation(response2.data.location)
        //console.log(response2.data.location)
        setAddress(response2.data.address)
        //console.log(response2.data.address)
        await reservations(true)
    }

    if(reservs.length == 0){
        reservations()
    }

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
                        {data.map((elem)=>(
                        <tr key={elem.location+elem.time_block}>
                        <td>{elem.time_block}</td>
                        <td>{elem.location}</td>
                        <td>{elem.spots_available - elem.count }</td>
                        <td> <ol>
                            {elem.emails.map((e) => {
                            return <li key={e+elem.location+elem.time}>{e}</li>
                        })} </ol>
                        </td>
                        <td> {props.email?<input type="button" value="Enroll" onClick={() => { enroll(elem) } }/>:<input type="button" value="Enroll" onClick={() => { history.push('/login', {'alert' : true}) } }/>}</td>
                        </tr>
                        ))}
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