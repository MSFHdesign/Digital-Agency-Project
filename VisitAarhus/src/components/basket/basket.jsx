import React from 'react'
import Draggable from 'react-draggable';
import './basketStyle.css'


export default function basket() {

  
  return (

    <Draggable bounds="parent"
    
   >
  
  
  <div className='BasketDragable'>IKON!</div>
  
  
  
    </Draggable>
  )
}
