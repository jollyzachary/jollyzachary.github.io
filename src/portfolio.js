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
    title: 'Engineering Technician',
    company: 'Milwaukee Tool',
    dates: '2022 - Present',
    description1: 'Developed a Python-based label generator program using CSV and openpyxl libraries, increasing efficiency by 80-90% and reducing labeling time.',
    description2: 'Created a streamlined report generator using Python, pandas, and Matplotlib with Power BI analytics software, reducing report generation time by 85-90%.',
    description3: 'Built a paperwork generator using Python, tkinter, pandas, and CSV for modifying and generating data entry based on a dynamically changing .xlsx Excel file.',
  },
  {
    title: 'Quality Technician II',
    company: 'Generac Power Systems',
    dates: '2020 - 2022',
    description1: 'Utilized quality control equipment to collect and analyze data at each stage of production, ensuring product quality and compliance.',
    description2: 'Identified areas for process improvement and implemented innovative techniques, leveraging data insights to drive decision-making.',
    description3: 'Produced and maintained detailed inspection reports and test data, providing critical information for data-driven decision-making and continuous process improvement.',
  },
  {
    title: 'Team Lead',
    company: 'RMB Products',
    dates: '2017 - 2020',
    description1: 'Utilized cutting-edge testing methodologies, including rigorous conductivity, pressure, and hydro testing, to ensure compliance with industry standards and maintain the highest level of product quality.',
    description2: 'Leveraged data analysis techniques to identify trends and flaws in the manufacturing process, producing detailed reports to inform continuous process improvement efforts.',
    description3: 'Conducted comprehensive three-stage inspections and audits of manufacturing processes, analyzing data to identify areas for improvement and ensure strict adherence to quality control standards.',
  },
];


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
  {
    title: 'Languages & Databases',
    items: [
      {
        icon: 'images/skills/python.png',
        title: 'Python',
      },
      {
        icon: 'images/skills/js.png',
        title: 'JavaScript',
      },
    ],
  },
  {
    title: 'Frameworks & Technologies',
    items: [
      {
        icon: 'images/skills/pytorch.png',
        title: 'Pytorch',
      },
      {
        icon: 'images/skills/react.png',
        title: 'React',
      },
      {
        icon: 'images/skills/nodejs.png',
        title: 'Nodejs',
      },
      {
        icon: 'images/skills/numpy.png',
        title: 'Numpy',
      },
      {
        icon: 'images/skills/openCV.png',
        title: 'Open CV',
      },
      {
        icon: 'images/skills/matplotlib.png',
        title: 'Matplotlib',
      },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      {
        icon: 'images/skills/anaconda.png',
        title: 'Anaconda',
      },
      {
        icon: 'images/skills/git.png',
        title: 'Git',
      },
      {
        icon: 'images/skills/powerapps.png',
        title: 'Microsoft Power Apps',
      },
      {
        icon: 'images/skills/365.png',
        title: 'Microsoft 365',
      },
    ],
  },
]

const education = [
  {
    title: '2023 - 2023',
    cardTitle: 'Nanodegree, AI Programing with Python',
    cardSubtitle: 'Udacity | School of Artificial Intelligence',
    cardDetailedText: 'Certification',
    icon: {
      src: 'images/education/udacity.png',
    },
  },
  {
    title: '2021 - 2023',
    cardTitle: 'Electrical Engineering Technology',
    cardSubtitle: 'Waukesha County Technical College',
    cardDetailedText: 'Associates',
    icon: {
      src: 'images/education/wctc.png',
    },
  },
];


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'zach.j.jolly@gmail.com',
}

export { header, about, projects, skills, contact, experience, education }
