import React from 'react'
import { headerApi } from '../../data/data'
import '../../index.css'

const Navbar: React.FC = () => {
  const { logo, contact } = headerApi

  return (
    <section className='grid grid-cols-[150px_auto_150px] py-5 items-center md:grid-cols-[50px_auto_100px]'>
      <span>
        <a href='/'>
          <img src={logo} alt={logo} className='w-12 h-full sm:w-8' />
        </a>
      </span>
      <nav className='flex items-center gap-5 text-lg md:text-sm font-medium text-paragraph md:gap-2'></nav>
      <div className='flex items-center gap-5 ml-5'>
        {contact.map((item, idx) => {
          return (
            <a href={item.link} className='text-3xl lg:text-lg md:text-xl' key={idx}>
              <item.icon className='text-primary-text ' />
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default Navbar
