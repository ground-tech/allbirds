import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className='w-full sticky top-0 z-40'>
    <div className='p-1 bg-[#212121] text-white text-center h-10'>
    <div className='max-w-lg m-auto h-full flex align-middle items-center'>
    <p className='text-[10px] sm:text-[14px] font-bold m-0 w-full'>
    Allbirds Presents: Cards On The Table, A New Series Hosted By Stanley Tucci | 
    </p>
    </div>
    </div>
    <div className='bg-white relative px-6 xl:px-8 shadow'>
      <div className='grid grid-cols-[1fr_auto_1fr] items-center h-16'>
        <div className='left-menu'>
        <button
        className=" text-black xl:hidden"
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu size={24}/>
      </button>
        <ul className="menu-list gap-7 hidden xl:flex">
          <li className='uppercase text-[14px] font-bold tracking-wider'>Men</li>
          <li className='uppercase text-[14px] font-bold tracking-wider'>Women</li>
          <li className='uppercase text-[14px] font-bold tracking-wider'>Socks</li>
          <li className='uppercase text-[14px] font-bold tracking-wider'>Sale</li>
        </ul>
        </div>
        <div className='logo w-28'>
          <img src="images/Allbirds_logo.png" alt="" />
        </div>
        <div className='right justify-self-end text-right'>
        <ul className="menu-list hidden xl:flex align-middle gap-7">
          <li className='uppercase text-[14px] font-bold tracking-wider'>Sustainability</li>
          <li className='uppercase text-[14px] font-bold tracking-wider'>ReRun</li>
          <li className='uppercase text-[14px] font-bold tracking-wider'>Stores</li>
          <li className='uppercase text-[14px] font-bold tracking-wider'><IoSearch size={24} /></li>
          <li className='uppercase text-[14px] font-bold tracking-wider'><FiUser size={24}/></li>
          <li className='uppercase text-[14px] font-bold tracking-wider'><FiHelpCircle size={24}/></li>
          <li className='uppercase text-[14px] font-bold tracking-wider'><LuShoppingCart size={24} /></li>
        </ul>
        <div className='xl:hidden'><LuShoppingCart size={24} /></div>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-md py-5 z-40 transition-transform ease-in-out duration-1000 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          className="p-2 text-black rounded-md absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <IoCloseSharp size={32} />
        </button>
        <nav className="mt-15 space-y-4 text-lg text-gray-800">
          <ul className='list-none flex flex-col items-start'>
          <li className='w-full uppercase text-[14px] font-bold tracking-wider border-b-1 border-y-[#ccc]'><a className="py-3.5 px-6 w-full block border-y-[#ccc]" href="">Men</a></li>
          <li className='w-full uppercase text-[14px] font-bold tracking-wider border-b-1 border-y-[#ccc]'><a className='py-3.5 px-6 w-full block border-y-[#ccc]' href="/">Women</a></li>
          <li className='w-full uppercase text-[14px] font-bold tracking-wider border-b-1 border-y-[#ccc]'><a className='py-3.5 px-6 w-full block border-y-[#ccc]' href="/">Socks</a></li>
          <li className='w-full uppercase text-[14px] font-bold tracking-wider border-b-1 border-y-[#ccc]'><a className='py-3.5 px-6 w-full block border-y-[#ccc]' href="/">Sale</a> </li>
          <li className='w-full uppercase text-[14px] font-bold tracking-wider border-b-1 border-y-[#ccc]'><a className='py-3.5 px-6 w-full block border-y-[#ccc]' href="/">Sustainability</a> </li>
          <li className='w-full uppercase text-[14px] font-bold tracking-wider border-b-1 border-y-[#ccc]'><a className='py-3.5 px-6 w-full block border-y-[#ccc]' href="/">ReRun</a> </li>
          <li className='w-full uppercase text-[14px] font-bold tracking-wider border-b-1 border-y-[#ccc]'><a className='py-3.5 px-6 w-full block border-y-[#ccc]' href="/">Stores</a></li>
          
          </ul>
        </nav>
      </div>
    </div>
    </header>
  )
}
