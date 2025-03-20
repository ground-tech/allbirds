import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";

export const Pdpslider = () => {
  
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
          {
            id: 5,
            image: "images/pdp.png",
            title: "Tree Gliders",
            price: "$130",
            description: "Blizzard/Hanami Blue",
            button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
            button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
          },
          {
              id: 6,
              image: "images/pdp1.png",
              title: "Tree Gliders 2",
              price: "$135",
              description: "Blizzard/Hanami Blue",
              button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
              button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
            },
            {
              id: 7,
              image: "images/pdp2.png",
              title: "Tree Gliders 3",
              price: "$140",
              description: "Blizzard/Hanami Blue",
              button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
              button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
            },
            {
              id: 8,
              image: "images/pdp3.png",
              title: "Tree Gliders 4",
              price: "$155",
              description: "Blizzard/Hanami Blue",
              button1: { label: "Shop Men", link: "https://example.com/learn-more-1" },
              button2: { label: "Shop Women", link: "https://example.com/buy-now-1" }
            },
      ];
 
      const swiperRef = useRef(null);
      const [isBeginning, setIsBeginning] = useState(true);
      const [isEnd, setIsEnd] = useState(false);
    
      useEffect(() => {
        if (swiperRef.current) {
          const swiperInstance = swiperRef.current.swiper;
          
          swiperInstance.on("slideChange", () => {
            setIsBeginning(swiperInstance.isBeginning);
            setIsEnd(swiperInstance.isEnd);
          });
    
          // Initialize state
          setIsBeginning(swiperInstance.isBeginning);
          setIsEnd(swiperInstance.isEnd);
        }
      }, []);


  return (
    <section id='pdpslider' className='bg-white my-10'>
        <div className='mb-4 flex items-center justify-between px-4 md:mb-8 md:px-10'>
            <h2 className='font-bold text-lg uppercase tracking-wide'>More To Shop</h2>
        </div>
        <div className='flex gap-1'>
        <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        navigation
      spaceBetween={8}
      slidesPerView={4.2}
      breakpoints={{
        320: { slidesPerView: 1.5 },  // Small screens
        480: { slidesPerView: 1.2 },  // Phones
        789: { slidesPerView: 4.2 },

      }}
    >
        { product.map((item) =>(
                   <SwiperSlide key={item.id} className="first:ml-5 sm:first:ml-10">
                    <div className='group overflow-hidden relative '>
                        <div className='image bg-gray-100'>
                            <img src={item.image} alt={item.title} className='transform transition-transform duration-300 group-hover:scale-110' />
                        </div>
                        <div className='py-2 flex flex-col gap-1 justify-end text-black'>
                            <div className=''>
                            <p className='text-lg font-bold font-black'>{item.title}</p>
                            <p className='text-base/none sm:text-sm/none md:text-xs/none lg:text-sm/none'><span className='text-sm'>{item.description}</span></p>
                            </div>
                            <p className='text-base'>{item.price} </p>
                        </div>
                        
                    </div>
                    </SwiperSlide>
                ))}
                </Swiper>
        </div>


    </section>
  )
}
