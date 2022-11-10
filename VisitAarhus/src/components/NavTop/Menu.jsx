import React from 'react';
// import { NavLink } from 'react-router-dom';
import calenderSearch from '../../Picture/icons/'


export default function Menu() {
  return (
    <div>
        <h1>Select City</h1>
        <select name="City" className='selectCity-holder'>
            {/* <option value="city" selected disabled hidden>Choose City</option> */}
            <option value="aalborg">Aalborg</option>
            <option value="aarhus">Aarhus</option>
            <option value="copenhagen">Copenhagen</option>
            <option value="odense">Odense</option>
        </select>

        <ul>
            <li>See your trip <calenderSearch/></li>
        </ul>

    </div>
  )
}