import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export const Featured = () => {

    const gridData = [
        {
          id: 1,
          image: "images/featured3.webp",
          title: "Bestsellers",
          description: "Fan-Favorite Sneakers, Flats, and Slip-Ons",
          button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
          button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
        },
        {
          id: 2,
          image: "images/featured2.webp",
          title: "New Arrivals",
          description: "The Latest Styles & Limited-Edition Colors",
          button1: { label: "Shop Men", link: "https://example.com/explore-2" },
          button2: { label: "Shop Women", link: "https://example.com/get-started-2" }
        },
        {
          id: 3,
          image: "images/featured1.webp",
          title: "Spring Essentials",
          description: "Breezy Shoes Made From Tree Fiber For Warmer Days Ahead",
          button1: { label: "Shop Men", link: "https://example.com/read-more-3" },
          button2: { label: "Shop Women", link: "https://example.com/sign-up-3" }
        }
      ];
      
      const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
     
      

  return (
    <section id='featured' className='relative mt-6 lg:m-10'>
    {isMobile ? (
        <Swiper 
        modules={[Navigation, Pagination]}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.2}
        spaceBetween={10}
        navigation
        initialSlide={2}
        className="w-full"
        >
        { gridData.map((item) =>(
    <SwiperSlide key={item.id} className='group relative overflow-hidden'>
        <div className='image'>
            <img src={item.image} alt="" className='transform transition-transform duration-300 group-hover:scale-105' />
        </div>
        <div className='absolute bg-black/20 p-7 md:py-16 top-0 h-full w-full text-center text-white'>
            <h2 className='text-2xl font-bold mb-1.5'>{item.title} </h2>
            <p className='text-sm font-medium sm:text-base'>{item.description}</p>
         <div className='absolute flex w-full sm:flex-wrap justify-center gap-2 left-0 px-6 bottom-10 transition-opacity duration-300'>
         <a href={item.button1.link} target="_blank" rel="noopener noreferrer" className='w-full md:min-w-40'>
      <button className="bg-white text-black h-10 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
      {item.button1.label}
      </button>
    </a>
    <a href={item.button1.link} target="_blank" rel="noopener noreferrer" className='w-full md:min-w-40'>
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
    <div className='grid grid-cols-3 gap-1.5'>
    { gridData.map((item) =>(
    <div key={item.id} className='group relative overflow-hidden'>
        <div className='image'>
            <img src={item.image} alt="" className='transform transition-transform duration-300 group-hover:scale-105' />
        </div>
        <div className='absolute bg-black/20 p-7 md:py-16 top-0 h-full w-full text-center text-white'>
            <h2 className='text-2xl font-bold mb-1.5'>{item.title} </h2>
            <p className='text-sm font-medium sm:text-base'>{item.description}</p>
         <div className='absolute flex w-full flex-wrap justify-center gap-2 left-0 px-6 bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
         <a href={item.button1.link} target="_blank" rel="noopener noreferrer" className='md:min-w-40'>
      <button className="bg-white text-black h-10 uppercase text-[12px] w-full tracking-wide font-bold p-2.5 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white transition-opacity duration-300 ease-in-out">
      {item.button1.label}
      </button>
    </a>
    <a href={item.button1.link} target="_blank" rel="noopener noreferrer" className='md:min-w-40'>
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
    </section>
  )
}
