"use client"

import Link from "next/link";
import "../../app/globals.css";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import RedirectIcon from "../icons/RedirectIcon";
import Image from "next/image";
import avatar from '../../images/avatar1.png'
import ConfigIcon from "../icons/ConfigIcon";
import Dropdown from "../Dropdown/Dropdown";
import { useLanguage } from "@/context/LanguageContext";
import ButtonsLanguages from "../Buttons/ButtonsLanguage";

const Navbar = () => {

  const { isEnglish} = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // 100px antes de la sección
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="lg:w-[70%] w-[90%] py-2 px-3 rounded-full flex items-center justify-between mx-auto fixed top-5 left-0 right-0 z-50 nav max-sm:hidden">
      
      <div>
        <Image src={avatar} alt="avatar" width={50} height={50} className="hover:rotate-[360deg] transition-all duration-700 cursor-pointer"/>
      </div>
      
      <div className="flex items-center gap-4">
      <a className="text-white font-medium hover:text-zinc-200" href="#aboutme" onClick={(e) => handleScroll(e, 'aboutme')}>{isEnglish ? "About me" : "Sobre mi"}</a>
        <a className="text-white font-medium hover:text-zinc-200" href="#experience" onClick={(e) => handleScroll(e, 'experience')}>{isEnglish ? "Experience" : "Experiencia"}</a>
        <a className="text-white font-medium hover:text-zinc-200" href="#skills" onClick={(e) => handleScroll(e, 'skills')}>{isEnglish ? "Technologies" : "Tecnologías"}</a>
        <a className="text-white font-medium hover:text-zinc-200" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>{isEnglish ? "Contact" : "Contacto"}</a>
      </div>

      <div className="flex items-center gap-3">
        <Link href="https://www.linkedin.com/in/manuel-latorre-936b72223/" passHref>
          <div className="flex items-center group">
            <LinkedinIcon className="group-hover:hidden transition-opacity duration-300" />
            <RedirectIcon className="hidden group-hover:block transition-opacity duration-300" />
          </div>
        </Link>
        <Link href="https://github.com/Manuel-latorre" passHref>
          <div className="flex items-center group">
            <GithubIcon className="group-hover:hidden" />
            <RedirectIcon className="hidden group-hover:block" />
          </div>
        </Link>
        
        <Dropdown/>
            
      </div>
    </nav>
  );
};

export default Navbar;
