//import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import './basketStyle.css'
import calendar from '../../Picture/icons/calendar.png';

//import { useState } from 'react';





export default function basket() {
// const [tripN, setTripN] = useState([]);
  
  
// const [trip, setTrips] = useState(0);
  
  return (
        <div className='BasketDragable'>
          <Link to='/seetrip'>
             <img className='menuItemImg' src={calendar} alt='MenuIcon' />
          </Link>
        </div>
  )
}
