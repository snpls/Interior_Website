'use client'

import { sponsor } from '@/utils/page'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { SlideLeft } from '@/animation/anime'

export default function Sponsor() {
  return (
    <section>
        <div className='container '>
          <div className='flex flex-wrap justify-evenly gap-5'>
            {sponsor.map((brand,index) => (
              <motion.div key={index} variants={SlideLeft(0.2 + (index * 0.2))} initial="initial" whileInView='animate'>
                <Image src={brand} className='inline w-[120px] md:w-[200px]' alt='brand' />
              </motion.div>
            ))}
          </div>
        </div>
    </section>
  )
}
