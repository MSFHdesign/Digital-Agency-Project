import React from 'react'
import { Box } from '@mui/system'
import LogoTop from '../LogoTop/LogoTop' 
import Nav from '../NavTop/Nav'

import './headerstyle.css'; 

export default function header() {
  return (
    <Box ClassName='HeaderTop Flexbox dirColumn'>
        
         <LogoTop/> 
         
         

        <Nav />


    </Box>
  )
}
