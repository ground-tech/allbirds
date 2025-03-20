import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";

export const Shoppable = () => {

    const product = [
        {
          id: 1,
          image: "images/pdp.png",
          title: "Tree Gliders",
          price: "$130",
          description: "Blizzard/Hanami Blue",
          button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
          button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
        },
        {
            id: 2,
            image: "images/pdp1.png",
            title: "Tree Gliders 2",
            price: "$135",
            description: "Blizzard/Hanami Blue",
            button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
            button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
          },
          {
            id: 3,
            image: "images/pdp2.png",
            title: "Tree Gliders 3",
            price: "$140",
            description: "Blizzard/Hanami Blue",
            button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
            button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
          },
          {
            id: 4,
            image: "images/pdp3.png",
            title: "Tree Gliders 4",
            price: "$155",
            description: "Blizzard/Hanami Blue",
            button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
            button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
          },
      ];

      const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
    <section className='bg-white'>
            <div className='flex flex-col md:flex-row sm:m-10 gap-2'>
                <div className='group relative overflow-hidden md:w-1/2 '>
                <div className='image'>
            <img src="images/Shopable.webp" alt="" className='transform transition-transform duration-300 group-hover:scale-105' />
        </div>
        <div className='absolute bg-black/20 p-7 md:py-16 top-0 h-full w-full text-white'>
            
         <div className='absolute flex w-full flex-wrap justify-baseline gap-2 left-0 px-6 bottom-10  transition-opacity duration-300'>
          <div className='mb-5'>
          <h2 className='text-2xl xl:text-3xl font-bold mb-2'>New And Bountiful Blues </h2>
          <p className='text-sm font-medium lg:text-base'>Cool shades to put some spring in your step.</p>
          </div>
             <div className='w-full flex gap-2'>
                <a href="/" target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto md:min-w-40'>
                    <button className="bg-white text-black h-11 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
                    Shop Men
                    </button>
                    </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className='w-full sm:w-auto md:min-w-40'>
                <button className="bg-white text-black h-11 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
                Shop Women
                </button>
                </a>
                </div>
         </div>
        </div>
                </div>

                {isMobile ? (
        <Swiper 
        modules={[Navigation, Pagination]}
        slidesPerView={1.5}
        spaceBetween={10}
        navigation
        className="w-full"
        >
        
                { product.map((item) =>(
                    <SwiperSlide key={item.id} className='group overflow-hidden relative bg-gray-50'>
                        <div className='image'>
                            <img src={item.image} alt={item.title} className='transform transition-transform duration-300 group-hover:scale-110' />
                        </div>
                        <div className='absolute inset-0 p-4 flex flex-col gap-1 justify-end text-black'>
                            <div className='flex mb-1 justify-between items-center'>
                            <p className='text-sm font-medium'>{item.title}</p>
                            <p className='text-xs/none sm:text-sm/none md:text-xs/none lg:text-sm/none'><span className='text-sm'>{item.price}</span></p>
                            </div>
                            <p className='text-xs'>{item.description} </p>
                        </div>
                        <div className='absolute inset-0 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.4)] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100'>
                        <div className='flex w-full flex-col gap-2 px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24  opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100'>
                        <a href={item.button1.link} target="_blank" rel="noopener noreferrer" className='md:min-w-40'>
                                <button className="bg-white text-black h-10 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
                                {item.button1.label}
                                </button>
                                </a>
                                <a href={item.button2.link} target="_blank" rel="noopener noreferrer" className='md:min-w-40'>
                                <button className="bg-white text-black h-10 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
                                {item.button2.label}
                                </button>
                                </a>
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
               
          </Swiper>
      ) : (
                <div className='grid-cols-1 gap-2 md:grid md:w-1/2 md:grid-cols-2 md:grid-rows-2'>
                { product.map((item) =>(
                    <div key={item.id} className='group overflow-hidden relative bg-gray-50'>
                        <div className='image'>
                            <img src={item.image} alt={item.title} className='transform transition-transform duration-300 group-hover:scale-110' />
                        </div>
                        <div className='absolute inset-0 p-4 flex flex-col gap-1 justify-end text-black'>
                            <div className='flex mb-1 justify-between items-center'>
                            <p className='text-sm font-medium'>{item.title}</p>
                            <p className='text-xs/none sm:text-sm/none md:text-xs/none lg:text-sm/none'><span className='text-sm'>{item.price}</span></p>
                            </div>
                            <p className='text-xs'>{item.description} </p>
                        </div>
                        <div className='absolute inset-0 flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.4)] opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100'>
                        <div className='flex w-full flex-col gap-2 px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24  opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100'>
                        <a href={item.button1.link} target="_blank" rel="noopener noreferrer" className='md:min-w-40'>
                                <button className="bg-white text-black h-10 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
                                {item.button1.label}
                                </button>
                                </a>
                                <a href={item.button2.link} target="_blank" rel="noopener noreferrer" className='md:min-w-40'>
                                <button className="bg-white text-black h-10 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
                                {item.button2.label}
                                </button>
                                </a>
                        </div>
                        </div>
                    </div>
                ))}
                </div>
              )}
            </div>
    </section>
  )
}
