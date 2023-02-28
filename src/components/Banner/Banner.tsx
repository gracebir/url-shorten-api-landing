import React from 'react'

function Banner() {
  return (
    <div className='h-screen md:h-[85vh] flex flex-col gap-10 px-8 lg:flex-row-reverse md:px-0 md:justify-between md:items-center md:container md:mx-auto'>
        
        <div className='md:w-[100vw] md:h-[60vh] h-[38vh] mr-[-50%] md:mr-[-30%]'>
        <img 
        className='w-full h-full object-contain'
        src="https://res.cloudinary.com/dnzidlufh/image/upload/v1677605996/illustration-working_xfbgx5.svg" 
        alt="hero-back" />
        </div>
        <div className='flex flex-col gap-4 items-center md:items-start lg:gap-8'>
            <h1 className='text-4xl text-center md:text-start md:text-7xl lg:text-8xl font-bold text-clViolet md:leading-[1.1]'>More than just shorter links</h1>
            <p className='text-clGrayish text-[1.1rem] leading-[1.5] lg:leading-[1.5] text-center md:text-start md:text-2xl lg:text-3xl'>build your brand's recognition and get detailed <br className='hidden md:block' /> insights on how your links are performing.</p>
            <a className='bg-clCyan font-medium px-10 py-3 transition ease-out duration-500 text-white md:mt-8 rounded-full mt-4 md:px-20 md:py-6 md:text-3xl md:hover:bg-cyan-300' href="#">Get Started</a>
        </div>
    </div>
  )
}

export default Banner
