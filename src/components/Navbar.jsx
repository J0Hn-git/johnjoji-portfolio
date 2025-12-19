import { useEffect } from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]);

    const githuburl = "https://github.com/J0Hn-git";
    const linkedinurl = "https://www.linkedin.com/in/john-joji-35a02231a/";

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
    
    <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
            <a href= "#home" className="font-mono text-xl font-bold text-white">
                {" "}
                JOHN<span className="text-blue-500"> JOJI</span>{" "}
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center text-white text-2xl"
                 onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? (
                        <span className="text-white text-3xl font-light leading-none">&times;</span>
                    ) : (
                        <span className="text-white text-xl">&#9776;</span>
                    )}
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a 
                    href="#home"
                     className="text-gray-300 hover:text-white transition-colors"
                     >
                        {" "}
                        Home{" "}
                    </a>
                    <a 
                    href="#about"
                     className="text-gray-300 hover:text-white transition-colors"
                     >
                        {" "}
                        About{" "}
                    </a>
                    <a 
                    href="#projects"
                     className="text-gray-300 hover:text-white transition-colors"
                     >
                        {" "}
                        Project{" "}
                    </a>
                    <a 
                    href="#contact"
                     className="text-gray-300 hover:text-white transition-colors"
                     >
                        {" "}
                        Contact{" "}
                    </a>
                    <div className="flex space-x-4 pl-4 border-l border-white/20">
                    <a href={githuburl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-300 hover:text-blue-500 transition duration-300"
                       aria-label="GitHub Profile"
                    >
                        <FaGithub size={20} />
                    </a>    
                    <a href={linkedinurl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-gray-300 hover: text-blue-500 transition duration-300"
                       aria-label="LinkedIn Profile"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    </div>

                </div>
        </div>
    </div>
    </nav>
}