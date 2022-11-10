import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Picture/logos/VisitDK.png';

export default function LogoTop() {
  return (
    <Link to="/"><img className='LogoTop' src={Logo} alt = 'Logotop'/> </Link>
  )
}
