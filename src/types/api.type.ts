import { IconType } from 'react-icons'

export interface Icon {
  icon: IconType
  link: string
}

export interface Header {
  logo?: string
  navigation: string[]
  contact: Array<Icon>
}

export interface User {
  image: {
    main?: string
    blur?: string
  }
  subtitles: {
    title_1: {
      icon?: string
      first: string
      second: string
    }
    title_2: {
      icon?: string
      first: string
      second: string
    }
  }
}

export interface Sub {
  year: number
  desc: string
}

export interface Story {
  title: string
  reason: string
  story: Array<Sub>
}

export interface SubList {
  id: number | string
  name: string
  technical: string
  link: string
  visit: string
}

export interface Project {
  title: string
  desc: string
  list: Array<SubList>
}

export interface ListSkill {
  name: string
  list: string[]
}

export interface Skill {
  title: string
  languages: ListSkill
  tools: ListSkill
}
