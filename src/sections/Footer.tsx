'use client'

import Image from 'next/image'
import React from 'react'
import logo from '@/assets/Logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SlideLeft } from '@/animation/anime';
import { motion } from 'framer-motion';


export default function Footer() {
  return (
    <footer className='py-10'>
        <motion.div variants={SlideLeft(0.6)} initial='initial' whileInView='animate' className='container'>
            <div className='max-md:space-y-10 border-b border-gray-500 pb-10 md:flex md:justify-between md:gap-10 lg:gap-28'>
                <div className='space-y-1'>    {/* upper footer */}
                    <div className='flex items-center gap-3'>
                        <Image src={logo} className='size-6' alt='logo' />
                        <h4 className='text-xl font-bold'>Interior</h4>
                    </div>
                    <h4 className='text-lg font-bold'>Tarlac, Philippines</h4>
                    <h4 className='text-lg font-bold'>@2024 SNPL All rights reserved</h4>
                </div>

                <div className='flex max-md:flex-wrap justify-between gap-10 md:flex-grow'>
                    <div >
                        <h4 className='text-2xl font-bold mb-4'>About us</h4>
                        <div className='flex flex-col gap-3'>
                            <a href="">Our Story</a>
                            <a href="">Designer</a>
                            <a href="">Craftsmanship</a>
                            <a href="">Sustainability</a>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold mb-4'>Support</h4>
                        <div className='flex flex-col gap-3'>
                            <a href="">FAQ&apos;s</a>
                            <a href="">Shipping & Returns</a>
                            <a href="">Care Guide</a>
                            <a href="">Guaranty</a>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold mb-4'>Contact us</h4>
                        <div className='font-bold space-y-3'>
                            <a href="" className='flex gap-3 items-center'><FaPhoneAlt />+639 9924 8825</a>
                            <a href="" className='flex gap-3 items-center'><MdEmail />Email@interior.com</a>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='font-bold gap-2 py-5 text-center'>&copy; 2024 SNPL. All rights reserved</h4>    
        </motion.div>
    </footer>
  )
}
