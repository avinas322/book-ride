import React, {useState, useEffect} from 'react';
import Ride from './Ride';
import './RideDetails.css';

function RideDetails(){
    const [rides, getRides] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:3000/offers`)
        .then(response => response.json())
        .then(data => getRides(data))
    },[]);
    let fetchedRides = null;
    if (rides!==null){
        fetchedRides = (rides.map((ride) =><Ride key={ride.id} {...ride} />));
    }
    return(
        <table>
            <thead>
                <tr>
                    <th>Start Point</th>
                    <th>End Point</th>
                    <th>Car Model</th>
                    <th>Seats Available</th>
                </tr>
            </thead>
            <tbody>
                {fetchedRides}
            </tbody>
        </table>
    )
}

export default RideDetails;