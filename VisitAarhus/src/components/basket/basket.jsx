//import React, { useState } from 'react'
import Draggable from 'react-draggable';
import './basketStyle.css'
import calendar from '../../Picture/icons/calendar.png';

import { useState } from 'react';





export default function basket() {
// const [tripN, setTripN] = useState([]);
  
  
 const [trip, setTrips] = useState(0);
  
  return (

    <Draggable bounds="parent">
      
     
        <div className='BasketDragable'>
          <div> <p>1</p> </div>
        <img className='menuItemImg' src={calendar} alt='MenuIcon' />
     
        </div>
     
    </Draggable>
  )
}
