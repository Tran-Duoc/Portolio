import React from 'react'
import '../../index.css'
import { SubList } from '../../types/api.type'
import { motion } from 'framer-motion'
interface List {
  item: SubList
  index: number
}

const CartInfo = ({ item, index }: List) => {
  const {  name, technical, visit, link } = item

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2, x: -200 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 1.2,
        delay: (index + 1) / 10,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className='w-[480px] px-10  h-60 bg-wrapper rounded-2xl flex flex-col justify-center py-5 sm:px-3 sm:py-2'
    >
      <span>
        <p className='title md:text-lg text-xl'>{name}</p>
        <div className='w-full h-1 bg-title-text rounded-xl mt-2' />
      </span>

      <div className='mt-5 min-h-[100px]'>
        <span className='text-lg font-medium text-primary-text mr-2'>Ngôn ngữ:</span>
        <span className='text-md font-medium text-paragraph'>{technical} </span>
      </div>
      <div className='flex items-center justify-start gap-10'>
        <div className='w-full  bg-title-text  flex items-center justify-center rounded-full py-2'>
          <a href={link} className='text-primary-text text-lg font-semibold'>
            Github
          </a>
        </div>
        <div className='w-full   bg-hover  flex items-center justify-center rounded-full py-2'>
          <a href={visit} className='text-primary-text text-lg font-semibold'>
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default CartInfo
