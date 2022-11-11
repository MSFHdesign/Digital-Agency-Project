import aarhusNightLife from '../Picture/img/aarhus-nightlife.jpg'

import React from 'react'


export default function Home() {
  return (
  

    <div className='BoxContainer'>
      {/* <h2>Home</h2> */}
      <div className='frameContainer'>
        <img className='headerImg' src={aarhusNightLife} alt = 'Aarhus dining'/>
        <div className='insideFrame'></div>
        <h2 className='exsploreTitle'>Restaurants</h2>
      </div>
     
    </div>
 
  
  
    
  )
}
