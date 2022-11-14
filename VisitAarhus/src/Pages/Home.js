import aarhusNightLife from '../Picture/img/aarhus-nightlife.jpg'

import React from 'react'

// Components 

import AddArticle from '../components/firebase tilfoej copy'
import ReadyKey from '../components/ReadyKey.jsx'


export default function Home() {
  return (
  

    <div className='BoxContainer'>
    
      <div className='frameContainer'>
        <img className='headerImg' src={aarhusNightLife} alt = 'Aarhus dining'/>
        <div className='insideFrame'></div>
        <h2 className='exsploreTitle'>Home</h2>
     </div>

     


      {/* beskrivelse */}
      
      <AddArticle />
      {/* her skal der vææære noget der beskriver det med at få en nøgle */}
        
         
      

        {/* Allerede oprettet tekst  */}

      <ReadyKey />

        
     
     
    </div>
 
  
  
    
  )
}
