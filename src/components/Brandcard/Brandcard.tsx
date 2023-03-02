import React from 'react'

export type brandCardProp = {
    icon: JSX.Element,
    title: string
    detail: string
    className: string
}

function Brandcard({icon, title, detail, className=""}: brandCardProp) {
  return (
<div className={`${className} w-[80%] mx-auto md:w-100% z-[999]`}>
        <div className='p-6 bg-bgDarkViolet w-[6rem] md:w-[7rem] h-[6rem] md:h-[7rem] relative mb-[-3rem] md:mb-[-3.2rem] z-[999] rounded-full mx-auto lg:mx-8 flex items-center justify-center'>
            <span>{icon}</span>
        </div>
        <div className='bg-white px-6 md:px-10 pt-16 md:pt-24 pb-6 md:pb-12 rounded-md z-[-1]'>
            <div className='flex flex-col gap-4 md:gap-6 text-center md:text-start'>
                <h1 className='font-bold text-2xl md:text-3xl'>{title}</h1>
                <p className='text-clGrayish md:text-[1.3rem]'>{detail}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Brandcard
