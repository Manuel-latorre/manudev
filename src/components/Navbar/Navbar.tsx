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


  return (
    <nav className="lg:w-[70%] w-[90%] py-2 px-3 rounded-full flex items-center justify-between mx-auto mt-5 sticky top-5 shadow-md z-10 max-sm:hidden nav">
      
      <div>
        <Image src={avatar} alt="avatar" width={50} height={50} className="hover:rotate-[360deg] transition-all duration-700 cursor-pointer"/>
      </div>
      
      <div className="flex items-center gap-4">
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>{isEnglish ? "About me" : "Sobre mi"}</Link>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>{isEnglish ? "Experience" : "Experiencia"}</Link>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>{isEnglish ? "Skills" : "Habilidades"}</Link>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>{isEnglish ? "Contact" : "Contacto"}</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link href="https://www.linkedin.com/in/tu-perfil" passHref>
          <div className="flex items-center group">
            <LinkedinIcon className="group-hover:hidden transition-opacity duration-300" />
            <RedirectIcon className="hidden group-hover:block transition-opacity duration-300" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/tu-perfil" passHref>
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
