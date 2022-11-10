import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <div>Nav
        <h1>Select City</h1>
        <select name="City" className='selectCity-holder'>
            <option value="city" selected disabled hidden>Choose City</option>
            <option value="aalborg">Aalborg</option>
            <option value="aarhus">Aarhus</option>
            <option value="copenhagen">Copenhagen</option>
            <option value="odense">Odense</option>
        </select>

        <NavLink>
            <p>See your trip</p>
            <img src="" alt="" />
        </NavLink>

    </div>
    
  )
}