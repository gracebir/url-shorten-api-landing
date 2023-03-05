import React, { useState } from 'react'
import { shortUrl } from './request'

export type shortType = {
    full_short_link: string,
    original_link: string
}

type shortenProps = {
    shortData: Array<shortType>
    setShortData: React.Dispatch<React.SetStateAction<shortType[]>> 
}

const localData:Array<shortType> = []

function ShortenCard({shortData, setShortData}:shortenProps) {
    const [url, setUrl] = useState("")
    const [error, setError] = useState(false)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!url){
            setError(true)
        } else {
            setError(false)
            const response = await shortUrl(url)
            if(response){
                const newShortens = {
                    full_short_link: response.result.full_short_link,
                    original_link: response.result.original_link
                }
                console.log(response)
                setShortData((data) => [...data, newShortens])
                localData.push(newShortens)
                localStorage.setItem("shorten",JSON.stringify(localData))
            }
        }
    }

  return (
    <form onSubmit={handleSubmit} className='mx-8 p-6 md:p-12 bg-bgDarkViolet absolute left-0 right-0 top-[105vh] md:top-[90vh] bg-shorten-mob md:bg-shorten-desk bg-no-repeat bg-container md:bg-cover bg-right-top md:bg-right-top md:mx-auto md:container md:bg-container flex flex-col md:flex-row md:items-baseline gap-4 rounded-md min-h-[10vh]'>
        <div className='flex flex-col gap-2 w-full'>
            <input 
            className={`px-3 md:px-6 py-3 md:py-4 rounded-md outline-none text-[1rem] md:text-xl ${error ? `border-clRed border-solid border-[3px] md:w-full text-clRed`:`border-none`}`} 
            type="text" 
            value={url}
            placeholder='Shorten a link here...'
            onChange={(e)=> setUrl(e.target.value)}
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
