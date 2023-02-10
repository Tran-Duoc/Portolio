import '../../index.css'
import { skillsAip } from '../../data/data'
import ListSkill from '../ListSkill/ListSkills'

const Skill = () => {
  const { title, languages, tools } = skillsAip
  return (
    <div className='min-h-[50vh] grid grid-cols-1 grid-rows-[100px_auto] mt-10 ' id='skills'>
      <div className='h-full text-center'>
        <span className='title block'>{title}</span>
      </div>
      <div className='grid grid-cols-[1fr_minmax(300px,_1fr)] grid-rows-1 items-center gap-10 overflow-hidden  lg:grid-cols-1 lg:grid-rows-2'>
        <ListSkill skill={languages} delay={0.2} pX={-300} />
        <ListSkill skill={tools} delay={0.2} pX={300} />
      </div>
    </div>
  )
}

export default Skill
