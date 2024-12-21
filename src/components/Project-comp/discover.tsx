'use client'

import { discDatas } from '@/utils/page'
import React from 'react'
import Button from '../Button'
import Image from 'next/image' 
import { motion } from 'framer-motion'
import { SlideLeft, SlideUp } from '@/animation/anime'

export default function Discover() {
  return (
    <div className='flex flex-col gap-20'>
        {discDatas.map((discData,index) => (
            <div key={index} className={`flex gap-10 items-center justify-between ${index === 1 ? 'flex-row max-md:flex-col-reverse' : 'flex-row-reverse max-md:flex-col-reverse'}`}>
                <div className='space-y-6 max-w-lg'>
                    <motion.h4 variants={SlideUp(0.2)} initial='initial' whileInView='animate' className='text-4xl font-serif font-bold'>{discData.title}</motion.h4>
                    <motion.p variants={SlideUp(0.4)} initial='initial' whileInView='animate' className='text-md text-gray-500'>{discData.descprition}</motion.p>
                    <motion.div variants={SlideUp(0.6)} initial='initial' whileInView='animate' className={`grid grid-cols-3 ${index !== 1 && 'hidden'}`}>
                        <div>
                            <h4 className='text-3xl font-serif font-bold mb-2'>{discData.numOfYears}</h4>
                            <p className='text-sm text-gray-500'>Years of <br/>experience</p>
                        </div>
                        <div>
                            <h4 className='text-3xl font-serif font-bold mb-2'>{discData.numOfClient}</h4>
                            <p className='text-sm text-gray-500'>Happy <br/>Client</p>
                        </div>
                        <div>
                            <h4 className='text-3xl font-serif font-bold mb-2'>{discData.numOfAward}</h4>
                            <p className='text-sm text-gray-500'>Award  <br/>Gained</p>
                        </div>
                    </motion.div>
                    <motion.div variants={SlideUp(0.6)} initial='initial' whileInView='animate'><Button variant='black'>{discData.button}</Button></motion.div>
                </div> 
                <motion.div variants={SlideLeft(0.3)} initial='initial' whileInView='animate' className='max-w-xl'>
                    <Image src={discData.image} alt='banner image' />
                </motion.div>
            </div>
        ))}
    </div>
  )
}
