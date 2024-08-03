import logo from "../assets/AzaamAhmedLogo.png";

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';


const Navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>

    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/azaamahmed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/azaamahmed" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://twitter.com/azaam_ahmed1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/itz_me_azaam_a_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
    </div>
  </nav>
} 

export default Navbar
