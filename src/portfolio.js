const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jollyzachary.github.io',
  title: 'Zachary.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Zachary Jolly',
  role: 'Jr. Developer',
  description:
    'I am a passionate software developer with a background in engineering technician roles. I have completed certification courses in AI programming with Python and am committed to continuing my education and growth in the tech industry. With exceptional problem-solving abilities, attention to detail, and a deep-rooted passion for programming, I am excited to contribute to the development of innovative solutions and grow alongside a dynamic team.',
  resume: 'https://drive.google.com/file/d/1WAPpzo3lcrYrjGsepnOVpwbkV956lumz/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/zachary-jolly-b18487132/',
    github: 'https://github.com/jollyzachary',
  },
}

const experience = [
  {
    title: 'Job Title 1',
    company: 'Company 1',
    dates: 'Year 1 - Year 2',
    description: 'Job description for job 1.',
  },
  {
    title: 'Job Title 2',
    company: 'Company 2',
    dates: 'Year 3 - Year 4',
    description: 'Job description for job 2.',
  },
  {
    title: 'Job Title 3',
    company: 'Company 3',
    dates: 'Year 5 - Year 6',
    description: 'Job description for job 3.',
  },
]


const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Git'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'zach.j.jolly@gmail.com',
}

export { header, about, projects, skills, contact, experience }
