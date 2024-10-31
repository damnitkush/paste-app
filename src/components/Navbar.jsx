import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <NavLink to="/" className='flex flex-row gap-4' >
            Home
        </NavLink>

        <NavLink to="/pastes" className='flex flex-row gap-4'>
            Pastes
        </NavLink>

    </div>
  )
}

export default Navbar