"use client"
// npm i react-icons framer-motion

import Link from "next/link"
import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { motion } from "framer-motion"


const navLink = [
    { title: 'About', path: '#hero' },
    { title: 'Portfolio', path: '#portfolio' }
]

export default function Navbar() {
    const [nav, setNav] = useState(false);
    
    const toggle = () => {
        setNav(!nav)
    }
    
    const closeNav = () => {
        setNav(false)
    }

    const menuVariant = {
        open: {
            x: 0,
            transition: { type: "spring", stiffness: 120, damping: 14 }
        },
        closed: {
            x: "-100%",
            transition: { type: "spring", stiffness: 120, damping: 14 }
        }
    }


    return (
        <div className="bg-black text-white/70 pt-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center px-4 py-2 mx-auto max-w-[400px]">
                <ul className="flex flex-row p-4 space-x-8">
                    {navLink.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>

                {/* Contact Me Button */}
                <ul>
                    <li>
                        <a href="#contact" className="group">
                            <h1 className="text-lg font-bold cursor-pointer">Contact Me</h1>
                            <div className="relative">
                                <div className="absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-800 rounded-full group-hover:w-full"></div>
                                <div className="mt-[3.5px] absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-800 rounded-full group-hover:w-full"></div>
                            </div>
                        </a>
                    </li>
                </ul>
                
            </div>
            {/* Mobile Menu Button */}
            <div 
                onClick={toggle} 
                className="md:hidden absolute top-5 right-5 border rounded border-black/70 p-2 z-50 cursor-pointer" 
                role="button"
                aria-label="Toggle navigation menu"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Menu */}
            <motion.div 
                initial={false} 
                animate={nav ? "open" : "closed"} 
                variants={menuVariant} 
                className="fixed left-0 top-0 w-full h-screen z-40"
            >
                <ul className="text-4xl font-semibold my-24 text-center space-y-8 bg-black">
                    {navLink.map((link, index) => (
                        <li key={index}>
                            <Link href={link.path} onClick={closeNav}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

