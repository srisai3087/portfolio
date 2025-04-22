import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from 'react-icons/si'; // All Si icons from Simple Icons

import { FaJava } from 'react-icons/fa'; // Font Awesome Java icon

export const skills = [
  {
    category: 'Frontend Development',
    techs: [
      { label: 'HTML5', icon: SiHtml5 },
      { label: 'CSS3', icon: SiCss3 },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'React', icon: SiReact },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'Bootstrap', icon: SiBootstrap },
    ],
  },
  {
    category: 'Backend Development',
    techs: [
      { label: 'Node.js', icon: SiNodedotjs },
      { label: 'Express', icon: SiExpress },
      { label: 'Java', icon: FaJava }, // Use FaJava from Font Awesome for Java
    ],
  },
  {
    category: 'Database Management',
    techs: [
      { label: 'MongoDB', icon: SiMongodb },
      { label: 'MySQL', icon: SiMysql },
    ],
  },
];
export const projects = [
  {
    id: 1,
    title: 'Food Waste Reduction Platform',
    description:
      'A simple website that helps users find donors, donate blood, and access essential pages like contact and about. Includes login and signup (frontend only), with backend development planned.',
    image: '/p1.png',
    technologies: [
      'HTML5',
      'CSS5',
      'JavaScript',
      'React',
      'Tailwind CSS',
      'Node.js',
      'MongoDB',
      'Stripe',
    ],
    github: 'https://github.com/srisai3087/Food-Bridge',
    liveDemo: 'https://food-donation-one.vercel.app/',
  },
  {
    id: 2,
    title: 'Blood Donation Website (Frontend)',
    description:
      'A simple website that helps users find donors, donate blood, and access essential pages like contact and about. Includes login and signup (frontend only), with backend development planned.',
    image:
      'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    technologies: ['HTML5', 'CSS5', 'JavaScript'],
    github: 'https://github.com/srisurada/task-management',
    liveDemo: 'https://task-management.example.com',
  },
  {
    id: 3,
    title: 'Rawmode Clothing Website',
    description:
      'An SEO-friendly eCommerce platform built with Odoo.com, optimized with strategic keywords for better search visibility and enhanced user experience.',
    image: '/p3.png',
    technologies: ['Odoo', 'SEO', 'Keyword Optimization', 'Responsive Design'],
    liveDemo: 'https://rawmode.odoo.com/',
  },
];


export const certificates = [
  {
    id: 1,
    image: '/c1.png',
    link: 'https://www.example.com/verify/certificate1'
  },
  {
    id: 2,
    image: '/c2.png',
    link: 'https://www.example.com/verify/certificate2'
  },
  {
    id: 3,
    image: '/c3.png',
    link: 'https://www.example.com/verify/certificate3'
  },
  // add more certificates later...
];
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
import { FaMapPin as MapPin } from 'react-icons/fa'; // Import MapPin icon from Font Awesome
import { FaMailBulk as Mail, FaPhoneAlt as Phone } from 'react-icons/fa'; // Import Mail and Phone icons
export const contactInfo = [
  { icon: MapPin, label: 'Location', text: 'Andhra Pradesh, India' },
  { icon: Mail, label: 'Email', text: 'suradasrisai5@gmail.com' },
  { icon: Phone, label: 'Phone', text: '6397097000' },
];