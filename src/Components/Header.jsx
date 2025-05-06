import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='bg-[#202020] text-white p-4 py-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-xl font-bold'>WorldAtlas</div>


                <div className='md:hidden text-3xl cursor-pointer' onClick={() => setOpen(!open)}>
                    ☰
                </div>

                <ul className='hidden md:flex space-x-6'>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                    } >Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                    } >About</NavLink></li>
                    <li><NavLink to="/country" className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                    }>Country</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                    }>Contact</NavLink></li>
                </ul>
            </div>

            {
                open && <ul className='md:hidden mt-4 space-y-4 text-center'>
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                    }>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                    }>About</NavLink></li>
                    <li><NavLink to="/country" className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                    }>Country</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) =>
                        isActive ? "text-yellow-400 font-bold" : "text-white"
                    }>Contact</NavLink></li>
                </ul>
            }
        </nav>
    )
}

