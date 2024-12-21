import { SlideLeft } from '@/animation/anime'
import { cardTestlDatas } from '@/utils/page'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function CardTestimonial() {
  return (
    <div className='bg-black py-10 px-14 md:px-20 grid md:grid-cols-3 gap-5'>
        {cardTestlDatas.map((testiData,index) =>(
            <motion.div variants={SlideLeft(0.2 + (index * 0.2))} initial='initial' whileInView='animate' key={testiData.name} className='border border-gray-600 px-3 py-10 text-white transition-all duration-300 hover:bg-white hover:text-black'>
                <div className='border-b border-gray-600 flex items-center mb-5 pb-5'>
                    <Image src={testiData.profilePic} alt={testiData.name} width={100} height={100} className='rounded-full size-16 mr-4' />
                    <div>
                        <h4 className='font-bold '>{testiData.name}</h4>
                        <p className='text-gray-500 text-sm'>{testiData.position}</p>
                        <p className='text-sm mt-2'>{testiData.star}</p>
                    </div>
                </div>
                <p>{testiData.comment}</p>
            </motion.div>
        ))}
    </div>
  )
}
