//import React, { useState } from 'react'
import Draggable from 'react-draggable';
import './basketStyle.css'
import calendar from '../../Picture/icons/calendar.png';
import { Link } from 'react-router-dom';


export default function basket() {
// const [tripN, setTripN] = useState([]);
  
  return (
    <Draggable bounds="parent">
      
      <Link to='/seetrip'>
        <div className='BasketDragable'>
          
        <img className='menuItemImg' src={calendar} alt = 'MenuIcon'/>
        </div>
      </Link>
    </Draggable>
  )
}
