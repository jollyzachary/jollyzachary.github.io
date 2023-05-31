const header = {
  homepage: 'https://jollyzachary.github.io',
  title: 'Zachary.',
}

const about = {
  name: 'Zachary Jolly',
  role1: 'Jr. Developer',
  role2: 'Engineering Technician',
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

  {
    name: 'Jr. Developer Portfolio',
    description:
      'A personal portfolio website built with JavaScript, CSS, HTML, and React showcasing my projects and skills.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jollyzachary/jollyzachary.github.io',
    livePreview: 'https://jollyzachary.github.io/',
    image: '/images/projects/portfolio.png',
  },
  {
    name: 'Pomodoro Clock',
    description:
      'A React.js-based Pomodoro Clock, providing a user-friendly interface for effective time management. Features adjustable work/break periods, real-time display, and audio cues.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jollyzachary/pomodoro-clock',
    livePreview: 'https://codepen.io/jollyzachary/pen/oNaOXow',
    image: '/images/projects/pomodoro_clock.png',
  },
  {
    name: 'Python Label Generator',
    description:
      'Comma automates the labeling of various items when coupled with a printhead, reducing labor and resources. It offers full customization to suit individual needs',
    stack: ['Python'],
    sourceCode: 'https://github.com/jollyzachary/comma-label-manager',
    image: '/images/projects/label_generator.png',
  },
  {
    name: 'Calculator',
    description:
      'A functional calculator application built with JavaScript, HTML, and CSS. It supports basic arithmetic operations and provides a user-friendly interface.',
    stack: ['JavaScript', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/jollyzachary/calculator',
    livePreview: 'https://codepen.io/jollyzachary/pen/mdzgyzW',
    image: '/images/projects/calculator.png',
  },
  {
    name: 'Simple Drum Machine',
    description:
      'A simple and interactive drum machine built with React. It allows users to play different drum sounds by clicking buttons or pressing keys on their keyboard.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jollyzachary/simple_drum_machine',
    livePreview: 'https://codepen.io/jollyzachary/pen/PoygwJp',
    image: '/images/projects/simple_drum_machine.png',
  },
  {
    name: 'React Markdown Previewer',
    description:
      'A React-based Markdown Previewer that allows users to input Markdown text and see a real-time HTML preview.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jollyzachary/react_markdown_previewer',
    livePreview: 'https://codepen.io/jollyzachary/pen/dygLyyK',
    image: '/images/projects/react_markdown_previewer.png',
  },
  {
    name: 'Random Quote Generator',
    description:
      'A Random Quote Generator that fetches and displays random quotes from an API. It also allows users to share the quotes on Twitter.',
    stack: ['React', 'JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/jollyzachary/ramdom_quote_generator',
    livePreview: 'https://codepen.io/jollyzachary/pen/mdzgbNQ',
    image: '/images/projects/random_quote_generator.png',
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
  email: 'zach.j.jolly@gmail.com',
  phone: '+262-629-7819',
  linkedin: 'https://www.linkedin.com/in/zachary-jolly-b18487132/',
}


export { header, about, projects, skills, contact, experience, education }
