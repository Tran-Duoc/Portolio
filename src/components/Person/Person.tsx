import { motion } from 'framer-motion'
import React from 'react'
import { userApi } from '../../data/data'
import Toast from '../Toast/Toast'

const Person: React.FC = () => {
  const { image, subtitles } = userApi
  return (
    <div className='min-h-[70vh] lg:min-h-[80vh] sm:min-h-[90vh] mt-16 lg:mt-0'>
      <div className='relative max-w-xl w-full mx-auto h-[60vh]'>
        <div>
          <img
            src={image.main}
            alt={image.main}
            className='absolute bottom-[5%] left-1/2 -translate-x-1/2  z-10 scale-125'
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.2
            }}
            src={image.blur}
            alt={image.blur}
            className='absolute bottom-0 left-1/2 -translate-x-1/2  rotate-90 scale-125'
          />
        </div>
        <div className='absolute -left-1/2 grid gap-10 xl:-left-1/3 z-10 lg:-bottom-60 lg:left-1/2 lg:-translate-x-1/2 lg:gap-5'>
          <div className=''>
            <Toast subTitle={subtitles.title_1} />
          </div>
          <div className=''>
            <Toast subTitle={subtitles.title_2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Person
