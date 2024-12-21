'use client'

import { SlideUp } from '@/animation/anime'
import { motion } from 'framer-motion'
import React from 'react'

export default function Subscribe() {
  return (
    <section className='py-16'>
        <div className='container text-center'>
            <motion.h3 variants={SlideUp(0.2)} initial='initial' whileInView='animate' className='text-3xl font-bold font-serif'>Subsribe to our Newsletter</motion.h3>
            <motion.p variants={SlideUp(0.4)} initial='initial' whileInView='animate' className='text-gray-600 mt-4 max-w-[350px] mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed libero doloremque ab eum!</motion.p>
            <motion.div variants={SlideUp(0.6)} initial='initial' whileInView='animate' className='mt-10 flex max-w-[500px] mx-auto'>
                <input type='email' placeholder='Enter your email' className='border border-gray-400 p-3 flex-shrink w-[100%]'/>
                <button type='submit' className='bg-black font-semibold text-white p-3 border border-black'>SUBSCRIBE</button>
            </motion.div>    
        </div>
    </section>
  )
}
