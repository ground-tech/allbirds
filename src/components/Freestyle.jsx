import React from 'react'

export default function Freestyle() {
 
    const gridData = [
        {
          id: 1,
          image: "images/freestyle2.webp",
          title: "Tree Styles",
          description: "Sneakers Made From Cool, Breathable Eucalyptus Fiber",
          button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
          button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
        },
        {
          id: 2,
          image: "images/freestyle1.webp",
          title: "Trail Runner",
          description: "Tough, Grippy, Ready To Explore",
          button1: { label: "Shop Men", link: "https://example.com/explore-2" },
          button2: { label: "Shop Women", link: "https://example.com/get-started-2" }
        },
        
      ];

  return (
    <section id='freestyle' className=''>
     <div className='flex flex-col sm:flex-row gap-1'>
     { gridData.map((item) =>(
     <div key={item.id} className='group relative overflow-hidden'>
        <div className='image'>
            <img src={item.image} alt="" className='transform transition-transform duration-300 group-hover:scale-105' />
        </div>
        <div className='absolute bg-black/20 p-7 md:py-16 top-0 h-full w-full text-center text-white'>
            <h2 className='text-3xl font-bold mb-1.5'>{item.title} </h2>
            <p className='text-sm font-medium sm:text-lg'>{item.description}</p>
         <div className='absolute flex w-full sm:flex-wrap justify-center gap-2 left-0 px-6 bottom-10 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
         <a href={item.button1.link} target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto md:min-w-40'>
      <button className="bg-white text-black h-12 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
      {item.button1.label}
      </button>
    </a>
    <a href={item.button1.link} target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto md:min-w-40'>
      <button className="bg-white text-black h-12 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
      {item.button2.label}
      </button>
    </a>
         </div>
        </div>
    </div>
    ))}
     </div>

    </section>
  )
}
