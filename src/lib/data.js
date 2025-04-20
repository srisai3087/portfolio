export const skills = [
    {
      category: 'Frontend Development',
      techs: ['HTML5', 'CSS5', 'JavaScript',  'React', 'Tailwind CSS', 'Bootstrap']
    },
    {
      category: 'Backend Development',
      techs: ['Node.js', 'Express', 'Java']
    },
    {
      category: 'Database Management',
      techs: ['MongoDB', 'MySQL']
    },
    // {
    //   category: 'DevOps & Cloud',
    //   techs: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'Terraform', 'Ansible']
    // }
  ];
  export const projects = [
    {
      id: 1,
      title: 'Food Waste Reduction Platform',
      description: 'A simple website that helps users find donors, donate blood, and access essential pages like contact and about. Includes login and signup (frontend only), with backend development planned.',
      
  
      image: '/p1.png',
      technologies: ['HTML5', 'CSS5', 'JavaScript',  'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/srisai3087/Food-Bridge',
      liveDemo: 'https://food-donation-one.vercel.app/',
    },
    {
      id: 2,
      title: 'Blood Donation Website (Frontend)',
      description: 'A simple website that helps users find donors, donate blood, and access essential pages like contact  and about. Includes login and signup (frontend only), with backend development planned.',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      technologies: ['HTML5', 'CSS5', 'JavaScript'],
      github: 'https://github.com/srisurada/task-management',
      liveDemo: 'https://task-management.example.com',
    },
    {
      id: 3,
      title: 'Rawmode Clothing Website',
      description: 'An SEO-friendly eCommerce platform built with Odoo.com, optimized with strategic keywords for better search visibility and enhanced user experience.',
      image: '/p3.png',
      technologies: ['Odoo', 'SEO', 'Keyword Optimization', 'Responsive Design'],
      // github: 'https://github.com/srisurada/weather-dashboard',
      liveDemo: 'https://rawmode.odoo.com/',
    },
    // {
    //   id: 4,
    //   title: 'Social Media Analytics',
    //   description: 'Analytics platform providing insights for social media performance with customizable dashboards and reports.',
    //   image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //   technologies: ['React', 'D3.js', 'Firebase', 'Social Media APIs'],
    //   github: 'https://github.com/srisurada/social-analytics',
    //   liveDemo: 'https://social-analytics.example.com',
    // },
    // {
    //   id: 5,
    //   title: 'Fitness Tracker',
    //   description: 'Health and fitness application that monitors workouts, nutrition, and provides personalized recommendations.',
    //   image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    //   technologies: ['React Native', 'Express', 'MongoDB', 'Health APIs'],
    //   github: 'https://github.com/srisurada/fitness-tracker',
    //   liveDemo: 'https://fitness-tracker.example.com',
    // },
    // {
    //   id: 6,
    //   title: 'Recipe Sharing Platform',
    //   description: 'Community-driven recipe sharing web app with user profiles, ratings, and personalized recommendations.',
    //   image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVjaXBlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    //   technologies: ['Angular', 'Node.js', 'MySQL', 'AWS'],
    //   github: 'https://github.com/srisurada/recipe-platform',
    //   liveDemo: 'https://recipe-platform.example.com',
    // },
  ];
  export const certificates = [
    {
      id: 1,
      image: "/c1.png" 
    },
    {
      id: 2,
      image: "/c2.png"
    },
    {
      id: 3,
      image: "/c3.png"
    }
  ];  
  // export const contactInfo = [
  //   {
  //     icon: 'FaMapMarkerAlt',
  //     text: 'Andhra Pradesh,India',
  //   },
  //   {
  //     icon: 'FaEnvelope',
  //     text: 'suradasrisai5@gmail.com',
  //   },
  //   {
  //     icon: 'FaPhone',
  //     text: '6397097000',
  //   },
  // ];
  export const socialLinks = [
    {
      id: 1,
      name: 'GitHub',
      url: 'https://github.com/srisurada',
      icon: 'FaGithub',
    },
    {
      id: 2,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/srisurada',
      icon: 'FaLinkedin',
    },
    {
      id: 3,
      name: 'Twitter',
      url: 'https://twitter.com/srisurada',
      icon: 'FaTwitter',
    },
  ];
  
  export const navLinks = [
    {
      id: 1,
      name: 'Home',
      url: '#home',
    },
    {
      id: 2,
      name: 'Skills',
      url: '#skills',
    },
    {
      id: 3,
      name: 'Projects',
      url: '#projects',
    },
    {
      id: 4,
      name: 'Certificates',
      url: '#certificates',
    },
    {
      id: 5,
      name: 'Contact',
      url: '#contact',
    },
  ];
  export const quickLinks = [
    {
      name: 'About Me',
      url: '/#about',
    },
    {
      name: 'Services',
      url: '/#services',
    },
    {
      name: 'Portfolio',
      url: '/#projects',
    },
    {
      name: 'Testimonials',
      url: '/#testimonials',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ];
  
  export const services = [
    {
      title: 'Web Development',
      description: 'Building responsive and interactive websites and web applications.',
      icon: 'FaLaptopCode',
    },
    {
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications for iOS and Android.',
      icon: 'FaMobileAlt',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive and engaging user interfaces and experiences.',
      icon: 'FaPaintBrush',
    },
    {
      title: 'API Development',
      description: 'Building robust APIs for seamless integration with other systems.',
      icon: 'FaExchangeAlt',
    },
  ];
  export const contactInfo = [
    { icon: MapPin, label: 'Location', text: 'Andhra Pradesh, India' },
    { icon: Mail, label: 'Email', text: 'suradasrisai5@gmail.com' },
    { icon: Phone, label: 'Phone', text: '6397097000' },
  ];
  import { MapPin, Mail, Phone } from 'lucide-react';