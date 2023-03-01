import { useState } from 'react'
import ShortenCard from '../ShortenCard/ShortenCard'

function Shorten() {
    const [shorten, setShorten] = useState("")
  return (
    <div className='min-h-screen bg-gray-300'>
      <ShortenCard shorten={shorten} setShorten={setShorten}/>
    </div>
  )
}

export default Shorten
