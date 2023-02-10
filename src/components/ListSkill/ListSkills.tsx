import { ListSkill } from '../../types/api.type'
import { delay, motion } from 'framer-motion'
import '../../index.css'
interface Props {
  skill: ListSkill
  delay: number
  pX: number
}

const ListSkills = ({ skill, delay, pX }: Props) => {
  const { name, list } = skill
  return (
    <motion.div
      className='bg-wrapper h-full rounded-2xl px-10 py-5 flex flex-col gap-5 md:px-5  '
      initial={{ opacity: 0, x: pX }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <div>
        <span className='title'>{name}</span>
        <div className='w-full h-1 bg-title-text mt-3'></div>
      </div>
      <div className='flex  gap-4 flex-wrap sm:items-center sm:justify-center'>
        {list.map((item, index) => {
          return (
            <div
              className='w-24 h-24 bg-theme/50 flex items-center justify-center px-7 shadow-primary-text rounded-full md:w-20 md:h-20'
              key={index}
            >
              <img src={item} alt='' className='w-full h-auto ' />
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default ListSkills
