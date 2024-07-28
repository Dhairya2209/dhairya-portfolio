import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb,SiTailwindcss, SiExpress, SiArduino, SiPostman, SiStreamlit, SiFlask, SiPostgresql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs,FaHtml5, FaCss3Alt, FaJs, FaGitAlt,  } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Award", href: "#award" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "  DHAIRYA MAISURIYA",
  info: "Fullstack MERN web developer with a passion for integrating robotics to create dynamic, innovative solutions.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Dhairya Maisuriya,currently pursuing a BTech in Information Technology with a minor in Robotics from Pandit Deendayal Energy University. My academic journey has been centered around web development using the MERN stack, where I have hands-on experience developing over 10 projects. These projects include dynamic web applications and responsive websites, showcasing my proficiency in HTML, CSS, JavaScript, React, MongoDB, Express, and Node.js.In addition to web development, I have a strong foundation in Data Structures and Algorithms, with expertise in using C++ to solve computational challenges effectively. This combination of skills allows me to approach software development with both creativity and analytical rigor.Looking ahead, my career goal is to continue growing as a software developer, contributing my skills to innovative startups. I am passionate about leveraging technology to solve real-world problems and am eager to create impactful solutions that drive business growth and user satisfaction.",
};

export const PROJECTS = [
  {
    title: "Hospital Management System",
    subtitle:
      "A full-stack Medical Care platform built with React, Node.js, and MongoDB which includes Smart Appointment Scheduling,Doctor Selection Interface etc.",
    image: image1,
    link:" https://lnkd.in/gnyEjKzF",
  },
  {
    title: "Book Store",
    subtitle:
      "Book Store application having user authentication,shopping cart,checkout,add to favourites etc.",
    image: image2,
    link:"https://grand-malabi-8daef4.netlify.app/",
  },
  {
    title: "Restaurant App",
    subtitle: "Basic restaurant app leveraging MERN stack UI/UX design",
    image: image3,
    link:"https://lnkd.in/de9qv_-K"
  },
  {
    title: "Weather App",
    subtitle:
      "A simple responsive Weather Application made with html,css,javascript and use of API",
    image: image5,
  },
  {
    title: "Mini Calender",
    subtitle:
      "Simple yet responsive Mini Calender application made with html,css,javascript",
    image: image6,
  },
];

// export const SKILLS = [
//   {
//     icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
//     name: "React",
//     experience: "2+ years",
//   },
//   {
//     icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
//     name: "Next.js",
//     experience: "1+ year",
//   },
//   {
//     icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
//     name: "MongoDB",
//     experience: "1.5+ years",
//   },
//   {
//     icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
//     name: "Redis",
//     experience: "1+ year",
//   },
//   {
//     icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
//     name: "Node.js",
//     experience: "2+ years",
//   },
//   {
//     icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
//     name: "PostgreSQL",
//     experience: "1+ year",
//   },
// ];

export const SKILLS = [
  {
    icon: <FaHtml5 className="text-4xl lg:text-6xl text-orange-500" />,
    name: "HTML",
    experience: "3+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl lg:text-6xl text-blue-500" />,
    name: "CSS",
    experience: "3+ years",
  },
  {
    icon: <FaJs className="text-4xl lg:text-6xl text-yellow-400" />,
    name: "JavaScript",
    experience: "1+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "1+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiTailwindcss className="text-4xl lg:text-6xl text-teal-400" />,
    name: "Tailwind CSS",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <SiExpress className="text-4xl lg:text-6xl text-gray-400" />,
    name: "Express",
    experience: "2+ years",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <SiFlask className="text-4xl lg:text-6xl text-gray-300" />,
    name: "Flask",
    experience: "1+ year",
  },
  {
    icon: <FaGitAlt className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Git",
    experience: "2+ years",
  },
  {
    icon: <FaGithub className="text-4xl lg:text-6xl text-gray-200" />,
    name: "GitHub",
    experience: "2+ years",
  },
  {
    icon: <SiPostman className="text-4xl lg:text-6xl text-orange-500" />,
    name: "Postman",
    experience: "2+ years",
  },
  {
    icon: <SiArduino className="text-4xl lg:text-6xl text-teal-500" />,
    name: "Arduino",
    experience: "3+ year",
  },
  {
    icon: <SiStreamlit className="text-4xl lg:text-6xl text-red-500" />,
    name: "Streamlit",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = [
  {title: " Hackathon ",
  award: "participation",
  description:
    "participated in hackathons at college as well as national level including SIH.",
  },
  
  {title: "Sports",
  award: "Runner-Up in table tennis organised by gov. of Gujarat",
  description:
    "Secured 2nd position in Khel Mahakumbh and awarded 3000 cash price",
  },

];


export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/dhairya-maisuriya-5b7039245/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Dhairya2209",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/_dhairya22__/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/_Dhairya22__",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  
];
