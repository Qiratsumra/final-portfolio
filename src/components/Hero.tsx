'use client'
import Image from "next/image" 
import cursor from '../../pubilc/icon1.png'
import meassge from '../../pubilc/icon2.png'
import { motion } from "framer-motion"

import profileiimage from '../../public/o_bg-remover-gen_2sf16uipw6YjhqVi4rsKKgMUHTD.png'

export default function Hero() {
  return (
    
 <div className="py-24 relative overflow-hidden bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
  <div
    className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2
      bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"
  ></div>

  <div className="flex justify-evenly gap-20 relative">
    <div className="relative">
      <div className="text-8xl font-bold text-center text-white/75">
        <h1>Hi, I am</h1>
        <h1>Qirat Saeed</h1>
      </div>
    </div>

    {/* <motion.div className=" hidden md:block absolute left-[280px] top-[178px] z-20" drag>
      <Image src={cursor} alt="Cursor" height={190} width={190} draggable="false" />
    </motion.div>

    <motion.div className="hidden md:block absolute left-[220px] top-[20px] z-20" drag>
      <Image src={meassge} alt="Message" height={190} width={190} draggable="false" />
    </motion.div> */}
  </div>

  <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/70">
    I am a frontend developer focused on creating websites that provide the best experience for users.
  </p>

  <Image
    src={profileiimage}
    alt="Profile Image"
    className="h-auto w-auto mx-auto z-10 relative"
/>
</div> 


  )
}
