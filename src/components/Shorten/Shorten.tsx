import { useEffect, useState } from 'react'
import CardShortLink from '../CardShortenLink/CardShortLink'
import ShortenCard, { shortType } from '../ShortenCard/ShortenCard'

// const shortens:Array<shortType> = JSON.parse(localStorage.getItem("shorten")!)
function Shorten() {
  const [shortData, setShortData] = useState<Array<shortType>>([])
  useEffect(()=> {
    let dataLocal:Array<shortType> = JSON.parse(localStorage.getItem("shorten")!)
    if(dataLocal){
      setShortData(()=> [...dataLocal])
    }
  },[])
  return (
    <div className='min-h-[20vh] bg-gray-300'>
      <ShortenCard shortData={shortData} setShortData={setShortData}/>
      {shortData.length > 0 ? (
        <div className='md:container md:mx-auto pt-[7rem] pb-6 md:pt-[6rem] bg-gray-300 flex flex-col gap-4 md:gap-6'>
        {/* <CardShortLink/> */}
        {shortData?.map((shorten, i)=> (
          <CardShortLink key={i} full_short_link={shorten.full_short_link} original_link={shorten.original_link}/>
        ))}
      </div>
      ): null}
    </div>
  )
}

export default Shorten
