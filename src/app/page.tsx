import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Project from '@/sections/Project'
import Service from '@/sections/Service'
import Sponsor from '@/sections/Sponsor'
import Subscribe from '@/sections/Subscribe'
import Testimonial from '@/sections/Testimonial'
import React from 'react'

export default function page() {
  return (
    <main>
      <Header />
      <Hero />
      <Sponsor />
      <Service />
      <Project />
      <Testimonial />
      <Subscribe />
      <Footer />
    </main>
  )
}
