"use client"

import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import heroImage from '@/assets/hero.png'
import { motion } from 'framer-motion'
import { SlideLeft, SlideUp } from '@/animation/anime'

export default function Hero() {
  return (
    <section className='py-24'>
        <div className='container md:flex md:items-center'>
            <div className='md:w-1/2'>
                <div className='text-center md:text-start flex flex-col gap-7 max-md:px-10 md:max-w-[250px] lg:max-w-[400px] '>
                    <motion.h2 variants={SlideUp(.2)} initial="initial"animate="animate" className='font-extrabold text-4xl uppercase font-serif'>sketch luxury interior design</motion.h2>
                    <motion.p variants={SlideUp(.5)} initial="initial" animate="animate" className='text-sm text-gray-500 leading-7'>Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.</motion.p>
                </div>

                <div className='flex max-md:flex-col gap-5 items-center justify-center md:justify-start mt-7'>
                    <motion.div variants={SlideUp(.7)} initial="initial" animate="animate"><Button variant='black'>GET STARTED</Button></motion.div>
                    <motion.div variants={SlideUp(.9)} initial="initial" animate="animate"><Button variant='white'>CONTACT US</Button></motion.div>
                </div>
            </div>
            
            <motion.div variants={SlideLeft(.5)} initial="initial" animate="animate" className='md:w-1/2 flex items-center justify-end'>
                <Image className='max-md:mt-10 ' src={heroImage} alt='Hero logo' />
            </motion.div>    
        </div>
    </section>
  )
}
