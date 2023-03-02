import { useState } from 'react'
import CardShortLink from '../CardShortenLink/CardShortLink'
import ShortenCard from '../ShortenCard/ShortenCard'

function Shorten() {
  // eslint-disable-next-line
    const [shorten, setShorten] = useState("")
  return (
    <div className='min-h-[20vh] bg-gray-300'>
      <ShortenCard shorten={shorten} setShorten={setShorten}/>
      <div className='md:container md:mx-auto pt-[7rem] pb-6 md:pt-[6rem] bg-gray-300 flex flex-col gap-4 md:gap-6'>
        <CardShortLink/>
        <CardShortLink/>
      </div>
    </div>
  )
}

export default Shorten
