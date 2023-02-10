import { projectApi } from '../../data/data'
import CartInfo from '../CartInfo/CartInfo'

const MyProject = () => {
  const { title, desc, list } = projectApi
  // const location: string[] = ['top-1/2 -translate-y-1/2', 'left-1/2 -translate-x-1/2', 'right-1 top-1/2']
  return (
    <div className='min-h-[50vh] flex flex-col mt-10 h-full lg:mt-16 overflow-hidden' id='project'>
      <div>
        <p className='title'>{title}</p>
        <div className='line' />
        <div className='desc'>
          <p>{desc}</p>
        </div>
      </div>
      <div className=' flex gap-5 xl:flex-wrap mt-10 w-full md:gap-2'>
        {list.map((item, index) => {
          return <CartInfo item={item} index={index} key={index} />
        })}
      </div>
    </div>
  )
}

export default MyProject
