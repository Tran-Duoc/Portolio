import { BsFacebook, BsGithub } from 'react-icons/bs'
import { Header, User, Story, Project, Skill } from '../types/api.type'

import logo from '../assets/image/logo.png'
import user from '../assets/image/user.png'
import purpleblur from '../assets/image/purpleblur.png'
import heart from '../assets/image/heartemoji.png'
import humble from '../assets/image/humble.png'
import html from '../assets/image/html.png'
import css from '../assets/image/css.png'
import javascript from '../assets/image/javascript.png'
import tailwind from '../assets/image/tailwind.png'
import react from '../assets/image/react.png'
import redux from '../assets/image/redux.png'
import typescript from '../assets/image/typescript.png'
import git from '../assets/image/git.png'
import github from '../assets/image/github.png'
import vscode from '../assets/image/vscode.png'
export const headerApi: Header = {
  logo: logo,
  navigation: ['Home', 'Project', 'Skills'],
  contact: [
    {
      icon: BsFacebook,
      link: 'https://www.facebook.com/profile.php?id=100027522219067'
    },
    {
      icon: BsGithub,
      link: 'https://github.com/Tran-Duoc'
    }
  ]
}

export const userApi: User = {
  image: {
    main: user,
    blur: purpleblur
  },
  subtitles: {
    title_1: {
      icon: humble,
      first: "Hi, I'm Tran Duoc",
      second: "I'm student at Can Tho university"
    },
    title_2: {
      icon: heart,
      first: "I'm studying to ",
      second: 'become a FrontEnd developer'
    }
  }
}

export const myStoryApi: Story = {
  title: 'Một chúc về bản thân mình.',
  reason: 'Tại sao lại chọn lập trinh web ?',
  story: [
    {
      year: 2021,
      desc: 'Sau khi học xong năm 1. Lúc này bắt đầu chán nản vì khả năng tư duy code kém.Chỉ biết gõ code ko biết tư duy chật vật với các môn ở trường do đã mất căng bản 😥.'
    },
    {
      year: 2022,
      desc: 'Mình bắt đầu một hướng đi mới cho bản thân và mình chọn web. Mới bắt đầu thì mình cảm thấy ổn cho đến khi mình học JavsScript thì khác. Do mất căng bản nên việc tiếp cận với ngôn ngữ mới đối với mình rất khó khắn nên mình bỏ ngang 😖'
    },
    {
      year: 2023,
      desc: 'Bắt đầu suy nghĩ cho tương lai nên mình quyết tâm học lại. Mình đã tìm ra cách học phù hợp cho bản thân, tư duy code cũng đã nâng cao hơn. Hiện tại mình vẫn đang cố gắng học tập hằng ngày để chạm đến mục tiêu của bản thân. '
    }
  ]
}

export const projectApi: Project = {
  title: 'Một số dự án cá nhân mà mình làm.',
  desc: 'Các project áp dụng những kiến thức mà mình tự học',
  list: [
    {
      id: 1,
      name: 'Website Bất động sản',
      technical: 'Full StacK MERN',
      link: 'https://github.com/Tran-Duoc/Mern_Stack',
      visit: ''
    },
    {
      id: 2,
      name: 'Trang web bán Giày thể thao',
      technical: 'React ReduxToolkit',
      link: 'https://github.com/Tran-Duoc/Nike_App',
      visit: 'https://nike-app-henna.vercel.app/'
    },
    {
      id: 3,
      name: 'Trang Portfolio',
      technical: 'React TypeScript',
      link: 'https://github.com/Tran-Duoc/Portolio',
      visit: 'https://portolio-seven.vercel.app/'
    }
  ]
}

export const skillsAip: Skill = {
  title: 'Đây là một số kỹ năng mà mình học 😊',
  languages: {
    name: 'Ngôn ngữ',
    list: [html, css, javascript, react, redux, typescript, tailwind]
  },
  tools: {
    name: 'Tools',
    list: [git, github, vscode]
  }
}
