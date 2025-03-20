import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id='site-footer' className='bg-[#212121] py-24'>
       <div className='max-w-[1380px] m-auto px-6 text-white'>
        <div className='flex flex-col sm:flex-row text-center items-center gap-8 sm:gap-0'>
            <div className='coll sm:w-1/4'>
                <h3 className='text-lg'>Help</h3>
                <ul className='mt-4'>
                    <li className='mb-2.5'><a className='text-sm' href="/">1-888-963-8944</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">1-814-251-9966 (Text)</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">help@allbirds.com</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Returns/Exchanges</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">FAQ/Contact Us</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Afterpay</a></li>
                </ul>
            </div>

            <div className='coll sm:w-1/4'>
                <h3 className='text-lg'>Shop</h3>
                <ul className='mt-4'>
                    <li className='mb-2.5'><a className='text-sm' href="/">Men's Shoes</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Women's Shoes</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Men's Apparel</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Women's Apparel</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Socks</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Gift Cards</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Refer a Friend</a></li>
                </ul>
            </div>
            <div className='coll sm:w-1/4'>
                <h3 className='text-lg'>Company</h3>
                <ul className='mt-4'>
                    <li className='mb-2.5'><a className='text-sm' href="/">Our Stores</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Our Story</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Our Materials</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Sustainability</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Investors</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Shoe Care</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Affiliates</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Bulk Orders </a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Careers</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Press</a></li>
                    <li className='mb-2.5'><a className='text-sm' href="/">Our Blog</a></li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col sm:max-w-1/4 text-center sm:text-left mt-7'>
            <h3 className='font-bold text-lg mb-3.5'>Follow the Flock</h3>
            <p className='text-sm mb-4'>Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild.
             Oh, we have cute sheep, too. #allbirds</p>
             <ul className='social flex justify-center sm:items-start gap-3.5'>
                <li><FiInstagram /></li>
                <li><FaTiktok /></li>
                <li><FaXTwitter /></li>
                <li><FaFacebookF /></li>
                <li><FaYoutube /></li>
                <li><FaPinterest /></li>
             </ul>
        </div>
       </div>
    </footer>
  )
}
