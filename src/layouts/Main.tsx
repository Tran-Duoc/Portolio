import React from 'react'
import MyProject from '../components/MyProject/MyProject'
import MyStory from '../components/MyStory/MyStory'
import Person from '../components/Person/Person'
import Skill from '../components/Skill/Skill'

const Main: React.FC = () => {
  return (
    <main>
      <Person />
      <MyStory />
      <MyProject />
      <Skill />
    </main>
  )
}

export default Main
