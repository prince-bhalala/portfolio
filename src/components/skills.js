'use client';

import { BackgroundLines } from "./ui/background-lines";
import {
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiScikitlearn,
  SiVercel,
  SiPostman,
  SiBootstrap,
  SiGithub
} from "react-icons/si";
import {HoverEffect} from "./ui/card-hover-effect";

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'React.js', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    { name: 'Python', icon: <FaPython className="text-yellow-400" /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="text-yellow-600" /> },
    { name: 'Vercel', icon: <SiVercel className="text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-orange-400" /> },
    { name: 'GitHub', icon: <SiGithub className="text-white" /> },
  ];

 const projects = [
  {
    title: "StayFinder",
    description:
      "A web app for students to find hostel/PG stays with search, filters, and posting features using Next.js and MongoDB.",
    link: <a href="#" className="text-sky-300 underline">View Project</a>,
  },
  {
    title: "Event Booking System",
    description:
      "A CLI-based ticket booking system built using Python and MySQL with matplotlib for analytics.",
    link: <a href="#" className="text-sky-300 underline">View Project</a>,
  },
  {
    title: "Foot Cap – Shoe Store",
    description:
      "An interactive eCommerce frontend built with HTML, Bootstrap, and JavaScript featuring cart, filter, and catalog.",
    link: <a href="#" className="text-sky-300 underline">View Project</a>,
  },
  {
    title: "VideoTuber",
    description:
      "A full-stack video sharing platform built with React, Node.js, MongoDB, and Cloudinary for media uploads.",
    link: <a href="#" className="text-sky-300 underline">View Project</a>,
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using Next.js and Tailwind CSS to showcase projects and skills.",
    link: <a href="#" className="text-sky-300 underline">View Project</a>,
  },
  {
    title: "Blog CMS",
    description:
      "A simple content management system with user authentication, post creation, and editing built in Django.",
    link: <a href="#" className="text-sky-300 underline">View Project</a>,
  },
];


  return (
    <div id="projects" className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      <BackgroundLines />

      <section className="relative z-10 px-6 py-16 sm:px-10 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-wide text-white drop-shadow-lg">
            Project Showcase
          </h2>
          <p className="text-gray-400 mt-2">A few things I've built recently</p>
        </div>

        <HoverEffect
          items={projects}
          className=" backdrop-blur-md p-6 rounded-lg shadow-lg  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        />
      </section>

      <section className="relative z-10 px-6 pb-15 sm:px-10 md:px-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-wide text-white drop-shadow-lg">
            My Skills
          </h2>
          <p className="text-gray-400 mt-2">
            A showcase of the tools and technologies I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition duration-300 ease-in-out cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span className="text-sm text-white font-medium group-hover:text-sky-300 transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;

