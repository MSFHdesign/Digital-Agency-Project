import React, { useState, useCallback } from 'react'
import { HamburgerSqueeze } from 'react-animated-burgers'
import Menu from './Menu'

const Nav = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive(prevState => !prevState),
    [],
  )

  const handleClick = event => {
    setIsActive(current => !current);
  };

  return (
    <section>
      <HamburgerSqueeze
        {...{ isActive, toggleButton }}
        onClick={handleClick}  
      >  
      </HamburgerSqueeze>
        {isActive && <Menu/>}
    </section>
  )
}

export default Nav