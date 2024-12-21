"use client"

import Image from 'next/image'
import React from 'react'
import logo from '@/assets/Logo.png'
import Button from '@/components/Button'
import { Navlinks } from '@/utils/page'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className='py-6'>
        <motion.div 
            initial={{y:-100}}
            animate={{y:0}}
            transition={{duration: 0.5}}
            className='container flex items-center justify-between gap-7'>
            <div className='flex items-center gap-3'>
                <Image src={logo} className='size-10' alt='logo' />
                <h4 className='text-2xl font-bold'>Interior</h4>
            </div>

            <div className='flex items-center justify-between max-md:hidden max-w-2xl flex-grow'>
              {Navlinks.map(navlink => (
                <a className='text-xl font-semibold' href={navlink.href} key={navlink.navbarItem}>{navlink.navbarItem}</a>
              ))}
            </div>

            <Button variant='white'>Try For Free</Button>
        </motion.div>
    </header>
  )
}
