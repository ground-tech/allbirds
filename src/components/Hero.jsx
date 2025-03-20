import React from 'react'

export const Hero = () => {
  return (
    <section className='relative'>
    <div className='banner_image'>
        <img src="images/Hero-mobile.webp" alt="Hero"  className='block sm:hidden w-full h-auto'/>
        <img src="images/Hero.webp" alt="Hero"  className='hidden sm:block w-full h-auto'/>
    </div>
    <div className='absolute top-0 h-full flex items-center text-center sm:text-left'>
      <div className='sm:w-[40rem] px-9'>
        <h1 className='text-6xl sm:text-8xl mb-3'>Curious</h1>
        <h2 className='text-3xl sm:text-5xl mb-7 uppercase'>By Nature</h2>
        <p className='text-sm uppercase mb-8 -tracking-tight'>Our new series, Cards On The Table, is a dream dinner party with the 
        cultural icons who inspire us. Hosted by Stanley Tucci.</p>
        <a href="https://example.com/learn-more-1" target="_blank" rel="noopener noreferrer" className=" md:min-w-40">
        <button className="bg-white text-black uppercase text-[12px] h-14 min-w-[200px] md:min-w-40 tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">Explore Shop</button></a>
        </div>
    </div>
    </section>
  )
}
