import React, { useEffect, useState } from 'react'
import { myStoryApi } from '../../data/data'
import '../../index.css'
import { motion } from 'framer-motion'

const MyStory: React.FC = () => {
  const { title, reason, story } = myStoryApi
  const [index, setIndex] = useState<number>(0)
  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLElement)) {
      return
    }
    const value = Number(e.target.dataset.index)
    setIndex(value)
  }

  return (
    <div className=' w-full  mx-auto min-h-[60vh]  grid grid-cols-1 grid-rows-[120px_auto] mt-10 h-full lg:mt-16'>
      <div>
        <p className='title'> {title}</p>
        <div className='line' />
        <div className=' desc'>
          <p>{reason}</p>
        </div>
      </div>
      <motion.div
        className='grid grid-rows-1 grid-cols-[140px_auto] gap-10 sm:grid-cols-[90px_auto] mt-10 sm:mt-20 md:gap-5'
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className='flex flex-col items-start justify-start gap-32 relative  before:content-[""]  before:bg-paragraph before:absolute before:right-1.5 before:w-1 before:h-[330px] z-[2]'>
          {story.map((item, idx) => {
            return (
              <div className='flex items-center justify-between w-full' key={idx}>
                <span className='relative text-xl font-bold text-paragraph'>{item.year}</span>
                <div
                  className={`w-4 h-4 bg-title-text  
                  rounded-full relative z-1 before:content-[""] before:bg-paragraph before:absolute before:w-7 before:h-7 
                  before:-translate-x-1/2 before:-translate-y-1/2 before:top-1/2 before:left-1/2 before:-z-[2] before:rounded-full`}
                  data-index={idx}
                  onClick={(e) => handleClick(e)}
                ></div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col items-center justify-start'>
          <div className='w-full min-h-[14rem] bg-wrapper py-8 px-12 rounded-2xl md:px-5 md:py-3'>
            <div className='relative  text-2xl font-bold text-title-text after:content-[" "] after:absolute after:w-full after:h-1 after:bg-title-text after:bottom-0 after:left-0 after:-mb-3 md:text-xl'>
              {story[index].year}
            </div>
            <p className='text-paragraph mt-8 md:mt-4 md:text-sm text-xl font-medium text-left'>{story[index].desc}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MyStory
