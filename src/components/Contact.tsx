import Image from 'next/image'
import phone from '../../public/phone.png'
import mail from '../../public/mail.png'
export default function Contact() {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0' id='contact'>
      <div className='flex justify-center items-center'>
        <ul className='space-y-4'>
          <li className='flex items-center'>
            <Image className='h-[110px] w-auto mr-6' src={phone} alt='phone'/>
            <p className='text-xl'>03002432507</p>
          </li>
          <li className='flex items-center'>
            <Image className='h-[110px] w-auto mr-6' src={mail} alt='mail'/>
            <p className='text-xl'>saeedqirat43@gmail.com</p>
          </li>
        </ul>
      </div>

      <div className=' bg-white/10 p-6 rounded-xl max-w-[600px] ml-40'>
      <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let's connect</h2>
      <p className='text-white/70 mb-6'>Send a message and lets scdule a call!</p>
      <form className='space-y-4' action="https://getform.io/f/bpjjdowb" method="POST">
        <div className='grid md:grid-cols-2 gap-4'>
          <input name='firstname' type="text"placeholder='Enter your first name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' />
          <input name='secondname' type="text"placeholder='Enter your second name' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' />
          <input name='phone' type="tel"placeholder='Enter your Phone' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' />
          <input name='email' type="email"placeholder='Enter your email' className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500' />
        </div>
        <textarea  className='bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 w-full' placeholder='Your Message' />
        <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>
      </form>
      </div>
    </div>
  )
}
