'use client';
import { BackgroundBeams } from './ui/background-beams';
import {SiGithub , SiLinkedin,} from 'react-icons/si';
import {MdEmail } from 'react-icons/md';
import Image from 'next/image';


export default function AboutSection() {
  return (
    <div id='about' className="relative flex flex-col items-center  min-h-screen px-4 pt-8 pb-20 bg-black text-white overflow-hidden">
      
    
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
      <div className="text-center mb-10">
          <h2 className="text-5xl font-extrabold text-white drop-shadow-lg tracking-wide">
            Get to Know Me
          </h2>
      </div>
      
       <div className="relative z-10 flex flex-col md:flex-row max-w-6xl w-full gap-12">
        
        
        <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-6">
          
          <Image  
            src="/prince2.jpg"
            alt="Your Name"
            className="rounded-2xl w-70 h-70 mt-10  object-cover "
            width={300}       // ✅ Add width
            height={300} 
          />
          <div className="text-center md:text-left">
            <h3 className="text-3xl text-center font-semibold  mb-2">Lj University</h3>
            <p className="text-gray-300 text-lg text-center">
              Bachelor of Engineering<br />
              Computer Engineering (2nd Year)
            </p>
          </div>
        </div>

        
        <div className="md:w-2/3 bg-black rounded-2xl px-8 py-10 shadow-lg ">
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I&apos;m a second-year B.E. Computer Engineering student and a growing Full Stack Developer with strong hands-on
            experience in the MERN stack. I&apos;ve built complete backend projects like <span className="text-cyan-400 font-medium">VideoTuber</span>, which integrates technologies
            like MongoDB, Express.js, Node.js, and Cloudinary for efficient media handling.
            <br /><br />
            Currently, I&apos;m deeply focused on mastering <span className="text-sky-400 font-medium">Next.js</span> and its ecosystem, including Tailwind CSS, to build
            modern and dynamic web applications. I&apos;m also exploring the world of <span className="text-yellow-400 font-medium">AI</span> and <span className="text-yellow-400 font-medium">Machine Learning</span>,
            with a keen interest in how these technologies can revolutionize industries.
            <br /><br />
            I&apos;m passionate about creating innovative solutions that make a difference.
            <span className="text-cyan-300 font-semibold"> Let&apos;s connect</span> and explore the exciting possibilities of technology together!
          </p>
          <div className="flex gap-5 mt-10">
      <a href="https://github.com/prince-bhalala">
        <SiGithub className="text-gray-300" size={30} />
      </a>
      <a href="http://linkedin.com/in/prince-bhalala-bba160313">
        <SiLinkedin className="text-gray-300" size={30} />
      </a>
      <a href='mailto:princebhalala24@gmail.com'>
        <MdEmail className="text-gray-300" size={30} />
      </a>
    </div>
        </div>

      </div>
    </div>
  );
}
