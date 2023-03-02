import React, { useState } from 'react'

function CardShortLink() {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => setClicked(true)
  return (
    <div className='bg-white mx-8 py-6 md:mx-0 md:px-4 rounded-md flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
      <p className="px-4">https://www.frontendmentor.io</p>
      <hr  className='block md:hidden'/>
      <div className='px-4 flex flex-col gap-2 md:gap-4 md:flex-row md:items-center'>
        <p className='text-clCyan'>https://rel.link/k4IKyk</p>
        <button onClick={handleClick} className={`transition ease-in duration-500 ${clicked ? `bg-clViolet`:`bg-clCyan`} py-2 md:px-6 text-white font-bold rounded-md`}>
            {clicked ? "Copied!":"Copy"}
        </button>
      </div>
    </div>
  )
}

export default CardShortLink
