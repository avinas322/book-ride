import React from 'react';

const Ride =(props) =>(
    <tr>
        <td>
            {props.start}
        </td>
        <td>
            {props.destination}
        </td>
        <td>
            {props.carModel}
        </td>
        <td>
            {props.seatsLeft}
        </td>
    </tr>
)

export default Ride;