import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

function Header() {
  return (
    <div className='min-h-screen flex items-center justify-center w-full bg-cover bg-center overflow-hidden mb-4' style={{ backgroundImage: "url('/header_img.png')" }} id="Header">
        <Navbar />
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center text-white mx-auto py-4 px-6 md:px-20 lg:px-32'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold mb-4 pt-20'>Explore homes that fit your dreams</h2>
            <div className='space-x-4 mt-10'>
                <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
            </div>
        </motion.div>
    </div>
  )
}

export default Header