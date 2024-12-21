import { SlideUp } from '@/animation/anime'
import { services } from '@/utils/page'
import { motion } from 'framer-motion'
import React from 'react'


export default function Card() {
  return (
    <div className='grid gap-5 mt-8 text-start md:grid-cols-3'>
        {services.map((service,index) =>(
          <motion.div variants={SlideUp(0.3 + (index * 0.1))} initial='initial' whileInView='animate' key={service.title} className='px-6 py-12 border border-gray-500 space-y-5 hover:shadow-full-gray hover:text-white hover:bg-neutral-900 transition-all duration-300'>
              <p className='border border-neutral-900 inline-block rounded-full p-3 '><service.logo className='size-6'/></p>
              <h4 className='text-3xl font-bold font-serif'>{service.title}</h4>
              <p className='text-sm text-gray-500'>{service.description}</p>
              <a href={service.link} className='underline inline-block font-semibold'>Learn More</a>
          </motion.div>
        ))}
    </div>
  )
}
