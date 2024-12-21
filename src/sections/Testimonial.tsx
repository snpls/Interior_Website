'use client'

import { SlideUp } from '@/animation/anime'
import CardTestimonial from '@/components/Tesimonial-comp/CardTestimonial'
import { motion } from 'framer-motion'
import React from 'react'

export default function Testimonial() {
  return (
    <section className='py-20'>
        <div className='container text-center mb-8'>
            <motion.h3 variants={SlideUp(0.2)} initial='initial' whileInView='animate' className='text-3xl font-bold font-serif'>Words from our coustomers</motion.h3>
            <motion.p variants={SlideUp(0.4)} initial='initial' whileInView='animate' className='text-gray-600 mt-4 max-w-[350px] mx-auto'>Bring your dream home to life with one-on-one design help & hand picked products</motion.p>
        </div>
        <CardTestimonial />
    </section>
  )
}
