import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'

const navItems = ["Features", "Pricing", "Resources"]
const navButtons = ["Login", "Sign Up"]

function NavBar() {
  return (
    <header className='px-8 py-10 flex justify-between md:px-0 md:py-10 md:container md:mx-auto md:gap-10 md:items-center'>
      <h1 className='font-bold text-3xl md:text-4xl'>Shortly</h1>
      <span className='text-clGrayish cursor-pointer md:hidden lg:hidden'>
        <RxHamburgerMenu size={30}/>
      </span>
      <div className='hidden md:flex justify-between md:items-center md:flex-1 font-bold text-clGrayish'>
        <ul className='flex gap-8'>
            {navItems.map((navItem, i)=> (
                <li key={i} className='hover:text-black transition ease-out duration-300'><a href="">{navItem}</a></li>
            ))}
            
        </ul>
        <div className='flex gap-0 lg:gap-4'>
           {navButtons.map((navButton, i)=>(
             <a key={i} className='px-4 py-3 lg:px-8 rounded-full transition ease-in-out duration-500 hover:bg-clCyan hover:text-white' href="">{navButton}</a>
           ))}
        </div>
      </div>
    </header>
  )
}

export default NavBar
