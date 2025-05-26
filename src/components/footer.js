import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="border-t border-cyan-600"></div>
      <div className="my-1" /> 
      <div className="border-t border-cyan-600 mb-6"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6">
        
        <div className="text-center md:text-left space-y-1">
          <h2 className="text-xl font-semibold tracking-wide">Prince Bhalala</h2>
          <p className="text-sm text-gray-400">Full Stack Developer | MERN & Beyond</p>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contect" className="hover:text-white transition">Contact</a></li>
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Resume</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <h3 className="text-lg font-semibold">
            Don’t hesitate to get in touch for any <br /> inquiries or to collaborate.
          </h3>
          <div className="flex space-x-4">
            <a
              href="mailto:your-email@example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
                bg-white text-black hover:bg-black hover:text-white
                transition-colors duration-500 ease-in-out border hover:border-white border-transparent"
              aria-label="Send Email"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://github.com/prince-bhalala"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
                bg-white text-black hover:bg-black hover:text-white
                transition-colors duration-500 ease-in-out border hover:border-white border-transparent"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/prince-bhalala-bba160313"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center
                bg-white text-black hover:bg-black hover:text-white
                transition-colors duration-500 ease-in-out border hover:border-white border-transparent"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
