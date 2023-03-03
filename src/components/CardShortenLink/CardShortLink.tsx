import React from 'react'
import { shortType } from '../ShortenCard/ShortenCard'



function CardShortLink({full_short_link, original_link}:shortType) {
    const [clicked, setClicked] = React.useState(false)
    const handleClick = async() => {
      await navigator.clipboard.writeText(full_short_link)
      setClicked(true)
    }
  return (
    <div className='bg-white mx-8 py-6 md:mx-0 md:px-4 rounded-md flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
      <p className="px-4 text-[1rem] md:text-[1.2rem]">{original_link}</p>
      <hr  className='block md:hidden'/>
      <div className='px-4 flex flex-col gap-2 md:gap-4 md:flex-row md:items-center'>
        <p className='text-clCyan'>{full_short_link}</p>
        <button onClick={handleClick} className={`transition ease-in duration-500 md:hover:bg-cyan-300 ${clicked ? `bg-clViolet`:`bg-clCyan`} py-2 md:px-6 text-white font-bold rounded-md`}>
            {clicked ? "Copied!":"Copy"}
        </button>
      </div>
    </div>
  )
}

export default CardShortLink
