import React from 'react'

import AdvanceSearch from '../Searchbar/advanceSearch'
import Search from '../Searchbar/Search.jsx'
import Icon from '../Searchbar/Icon.jsx'



export default function Searchbar() {
  return (
  
    <div className='Flexbox dirRow'>  <Search /> <Icon /> <AdvanceSearch /> </div>
  
  
    )
}
