import React from 'react'

export const Approach = () => {
  return (
    <section id='approach'>
        <div className='bg-white py-20 text-black'>
            <div className='max-w-[1380px] m-auto px-6'>
                <h2 className='text-3xl mb-6 font-bold'>The Allbirds Approach</h2>
                <ul className='flex  flex-col sm:flex-row gap-6'>
                <li>
                <h3 className='text-2xl font-bold mb-2.5'>Wear-All-Day Comfort</h3>
                <p className='text-sm m-0 font-medium tracking-wide'>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make
                 any outing feel effortless. Slip in,
                 lace up, or slide them on and enjoy the comfy support.</p>
                 <a href="/" className='underline text-sm'>Learn More</a>
                </li>

                <li>
                <h3 className='text-2xl font-bold mb-2.5'>Sustainability In Every Step</h3>
                <p className='text-sm m-0'>From materials to transport, we’re working to reduce our carbon
                 footprint to near zero. Holding ourselves accountable and striving for
                  climate goals isn’t a 30-year goal—it’s now.</p>
                 <a href="/" className='underline text-sm'>Learn More</a>
                </li>

                <li>
                <h3 className='text-2xl font-bold mb-2.5'>Materials From The Earth</h3>
                <p className='text-sm m-0'>We replace petroleum-based synthetics with natural alternatives
                 wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft,
                  breathable, and better for the planet—win, win, win.</p>
                 <a href="/" className='underline text-sm'>Learn More</a>
                </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
