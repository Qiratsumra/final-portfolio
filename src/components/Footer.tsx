import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='mt-12 text-white/70 py-8 container max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Qirat Saeed</h1>
        <div className='flex space-x-4 mt-4'>
            <Link className='hover:text-gray-300'  href={'#'}><FaLinkedinIn size={24}/></Link>
            <Link className='hover:text-gray-300' href={'#'}><FaTwitter size={24}/></Link>
            <Link className='hover:text-gray-300' href={'#'}><FaInstagram size={24}/></Link>
        </div>
    </div>
  )
}
