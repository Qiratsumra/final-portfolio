'use client'
import Image from "next/image"
import aboutImage from '../../public/o_bg-remover-gen_2sf16uipw6YjhqVi4rsKKgMUHTD.png'
import book from '../../public/book.png'
import pc from '../../public/pc.png'
import card from '../../public/card.png'
import finance from '../../public/finance.png'
export default function About() {
  return (
<div className="max-w-[1200px] mx-auto p-6" id="about">
  {/* Section Title */}
  <h1 className="text-white text-6xl font-serif text-center p-4 mb-12">
    About <span className="text-orange-400">Me</span>
  </h1>

  {/* Grid Container */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12">
    {/* 🔸 Education Card */}
    <div className="relative bg-black/45 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-6 flex items-center gap-4">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>

      {/* Icon */}
      <Image src={book} alt="Education" className="w-auto h-[130px] relative z-10" />

      {/* Text */}
      <div className="relative z-10">
        <h1 className="text-2xl font-bold text-white/70">Education</h1>
        <p className="text-lg text-white/70 mt-2">Intermediate from Karachi, Sindh Board</p>
      </div>
    </div>

    {/* 🔹 Project 1 */}
    <div className="relative bg-black/45 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-6 flex items-center gap-4">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>

      <Image src={pc} alt="Project 1" className="w-auto h-[130px] relative z-10" />

      <div className="relative z-10">
        <h1 className="text-2xl font-bold text-white/70">Project Q</h1>
        <p className="text-lg text-white/70 mt-2">Description here...</p>
      </div>
    </div>

    {/* 🔹 Project 2 */}
    <div className="relative bg-black/45 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-6 flex items-center gap-4">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>

      <Image src={card} alt="Project 2" className="w-auto h-[130px] relative z-10" />

      <div className="relative z-10">
        <h1 className="text-2xl font-bold text-white/70">Project Q</h1>
        <p className="text-lg text-white/70 mt-2">Description here...</p>
      </div>
    </div>

    {/* 🔹 Project 3 */}
    <div className="relative bg-black/45 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden p-6 flex items-center gap-4">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30"></div>

      <Image src={finance} alt="Project 3" className="w-auto h-[130px] relative z-10" />

      <div className="relative z-10">
        <h1 className="text-2xl font-bold text-white/70">Project Q</h1>
        <p className="text-lg text-white/70 mt-2">Description here...</p>
      </div>
    </div>
  </div>
</div>

  )
}
