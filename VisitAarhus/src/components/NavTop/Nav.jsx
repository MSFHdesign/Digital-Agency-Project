import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <div className='burgerMenu'>
      <NavLink to='/Menu'>
        <button>Burger</button>
      </NavLink>
    </div>
    
  )
}
