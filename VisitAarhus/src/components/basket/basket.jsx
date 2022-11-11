import React from 'react'
import Draggable from 'react-draggable';
import './basketStyle.css'
import calendar from '../../Picture/icons/calendar.png';

export default function basket() {

  return (
    <Draggable bounds="parent">
      <div className='BasketDragable'>
        <img className='menuItemImg' src={calendar} alt = 'MenuIcon'/>
      </div>
    </Draggable>
  )
}
