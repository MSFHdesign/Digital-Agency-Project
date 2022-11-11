import React from 'react'
import aarhusNightLife from '../Picture/img/salling.jpg'
import Places from '../components/place/Places'

export default function discover() {
  return (
    <div className='BoxContainer'>
      <div className='frameContainer'>
        <img className='headerImg' src={aarhusNightLife} alt = 'Aarhus dining'/>
        <div className='insideFrame'></div>
        <h2 className='exsploreTitle'>Discover</h2>
        </div>

{/* JSON FILER DISPLAYED */}
 <Places/>
    </div>
  )
}
