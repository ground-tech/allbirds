import React from 'react'
import Bannermenu from '../components/Bannermenu'
import { Hero } from '../components/Hero'
import { Featured } from '../components/Featured'
import { Better } from '../components/Better'
import { Shoppable } from '../components/Shoppable'
import Freestyle from '../components/Freestyle'
import { Pdpslider } from '../components/Pdpslider'
import { Newsletter } from '../components/Newsletter'
import { Approach } from '../components/Approach'

export const Home = () => {
  return (
    <div>
    <Bannermenu />
    <Hero />
    <Featured />
    <Better />
    <Shoppable />
    <Freestyle />
    <Pdpslider />
    <Newsletter />
    <Approach />
    </div>
  )
}
