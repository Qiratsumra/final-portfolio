'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import project from '../../public/project.jpg'
import resume from '../../public/3d-rendering-cartoon-style-minimal-cv-resume-ic-removebg-preview.png'
import Link from 'next/link'
import ecommerce from '../../public/makeup.png'
import foodluck from '../../public/ecommerce.png'
import blog from '../../public/image.png'
const projects =[
  {title:'Resume Builder',desc:"This resume builder is builded by using HTML, CSS and TYPESCRIPT",link:"https://milestone-5-one-lake.vercel.app/",src:resume},
  {title:'Aura Of Beauty',desc:"This project is build by using typescript, nextjs a react frame and tailwind css and sanity.io",link:"https://sanity-ecommerce-qs.vercel.app/",src:ecommerce},
  {title:'FoodLuck',desc:"This project is also build by using typescript, nextjs a react frame and tailwind css and sanity.io and shadcn",link:"",src:foodluck},
  {title:'Food blog website',desc:"This project is build by using typescript, nextjs a react frame and tailwind css and sanity.io",link:"https://sanity-food-blog.vercel.app/",src:blog},
]

export default function Portfolio() {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40' id='portfolio'>
      <h1 className="text-orange-400 text-6xl font-serif text-center p-4 mb-12">Projects</h1>
      <div className='max-w-[1200px] mx-auto space-y-24 '></div>
      {projects.map((project,index)=>(
        <motion.div 
        key={index}
        initial ={{opacity:0,y:75}}
        whileInView={{opacity: 1, y: 0, transition: { duration: 0.5, delay:0.25 }}} 
        className={`flex ${index %2 ==1?'flex-col-reverse md:flex-row-reverse gap-12':'flex-col md:flex-row'}`}>
          <div className='space-y-2 max-w-[550px]'>
            <h2 className='text-7xl text-white/70'>{`0${index+1}`}</h2>
            <h2 className='text-4xl'>{project.title}</h2>
            <p className='text-lg text-white break-words p-4'>{project.desc}</p>
            <div className='w-64  h-[1px] bg-gray-400 my-4'>
              <Link href={project.link} className='text-xl text-orange-500'>Link</Link>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Image src={project.src} alt='' className='h-[350px] w-auto object-cover my-5 border rounded border-gray-300'/>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

