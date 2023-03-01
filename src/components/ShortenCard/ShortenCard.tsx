import React, { useState } from 'react'

type shortCard = {
    shorten: string
    setShorten: React.Dispatch<React.SetStateAction<string>>
}

function ShortenCard({shorten, setShorten}:shortCard) {
    const [error, setError] = useState(false)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!shorten){
            setError(true)
        } else {
            setError(false)
        }
    }
  return (
    <form onSubmit={handleSubmit} className='mx-8 p-6 md:p-12 bg-bgDarkViolet absolute left-0 right-0 top-[105vh] md:top-[90vh] bg-shorten-mob md:bg-shorten-desk bg-no-repeat bg-container md:bg-cover bg-right-top md:bg-right-top md:mx-auto md:container md:bg-container flex flex-col md:flex-row md:items-baseline gap-4 rounded-md min-h-[10vh]'>
        <div className='flex flex-col gap-2 w-full'>
            <input 
            className={`px-3 md:px-6 py-3 md:py-4 rounded-md outline-none text-[1rem] md:text-xl ${error ? `border-clRed border-solid border-[3px] md:w-full text-clRed`:`border-none`}`} 
            type="text" 
            value={shorten}
            placeholder='Shorten a link here...'
            onChange={(e)=> setShorten(e.target.value)}
             />
            {error && (
                <span className='text-[.69em] italic text-clRed md:text-[1rem]'>Please add a link</span>
            )}
        </div>
        <button type='submit' className='bg-clCyan py-3 md:py-4 md:px-8 md:text-xl transition ease-in duration-300 md:hover:bg-cyan-300 md:whitespace-nowrap text-white font-bold rounded-md outline-none'>
            Shorten it!
        </button>
    </form>
  )
}

export default ShortenCard
