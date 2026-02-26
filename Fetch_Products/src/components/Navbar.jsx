import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
const Navbar = () => {
    return (
        <>
            <div className='text-blue-600 flex justify-evenly text-2xl font-semibold'>
                <NavLink to='/' className={({isActive}) => isActive ? 'text-red-500' : ''}>
                    Home
                </NavLink>
                <NavLink to='/products' className={({isActive}) => isActive ? 'text-red-500': ''}>
                    Products
                </NavLink>
                <NavLink to='/about' className={({isActive}) => isActive ? 'text-red-500': ''}>
                    About
                </NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive ? 'text-red-500': ''}>
                    Contact
                </NavLink>
            </div>
        </>
    )
}

export default Navbar
