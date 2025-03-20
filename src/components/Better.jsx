import React from 'react'
import { Logo } from './Logo'

export const Better = () => {
  return (
    <section className='my-10'>
      <div className='relative overflow-hidden text-center'>
      <div className='image_container'>
        <img src="images/better.webp" alt="better" className='w-full hidden sm:block ' />
        <img src="images/better1.webp" alt="better" className='w-full block sm:hidden h-80 ' />
      </div>
      <div className='absolute p-10 text-white top-0 left-0 h-full w-full z-10 flex flex-col items-center justify-center'>
        <h2 className='mb-6 text-base font-medium uppercase tracking-wider lg:text-2xl'>We Make Better Things In A Better Way</h2>
        <div className='Richtext mx-auto max-w-3xl lg:text-lg'>
            <p className='paragraph mb-8'>By looking to the world’s greatest innovator—Nature—we create shoes that deliver unrivaled comfort that you feel good in and feel good about.</p>
        </div>
        <Logo />
      </div>
      </div>
    </section>
  )
}
