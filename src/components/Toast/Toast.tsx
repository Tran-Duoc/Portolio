import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  subTitle: {
    icon?: string
    first: string
    second: string
  }
}

const Toast: React.FC<Props> = ({ subTitle }) => {
  const { first, second, icon } = subTitle

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, x: -200 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 1.2,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className=' w-[22rem] sm:w-[16rem] grid grid-cols-[50px_auto] gap-3 bg-wrapper px-2 py-3 rounded-2xl items-center sm:py-2'
    >
      <img src={icon} alt={icon} />
      <div className='flex flex-col text-paragraph font-normal  text-base md:text-sm sm:text-xs'>
        <span>{first}</span>
        <span>{second}</span>
      </div>
    </motion.div>
  )
}

export default Toast
