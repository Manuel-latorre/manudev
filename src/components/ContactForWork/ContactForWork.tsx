"use client"

import Link from "next/link";
import React from "react";
import GmailIcon from "../icons/GmailIcon";
import RedirectIcon from "../icons/RedirectIcon";
import LinkedinOutlineIcon from "../icons/LinkedinOutlineIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import EmailIcon from "../icons/EmailIcon";
import ShineBorder from "../magicui/shine-border";
import { useLanguage } from "@/context/LanguageContext";

const ContactForWork = () => {

  const {isEnglish} = useLanguage()


  return (
    <div id="contact" className="flex items-center justify-between lg:w-[70%] w-[90%] mx-auto my-44 max-md:flex-col max-md:text-center max-md:gap-12">
      <div className="flex flex-col gap-8">
        <p className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent xl:text-3xl 2xl:text-4xl text-2xl font-bold max-sm:text-2xl">
          {isEnglish ? "Do you have a project in mind?" : "¿Tienes un proyecto en mente?"}
        </p>
        <p className="text-zinc-100 xl:text-3xl 2xl:text-4xl text-2xl font-bold">
         {isEnglish ? "Contact me and let's make it happen!" : "¡Contáctame y hagamos que suceda!"}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        
        <Link href={"https://www.linkedin.com/in/manuel-latorre-936b72223/"} className="text-center text-2xl font-bold capitalize cursor-pointer hover:scale-105 transition-all nav p-3 rounded-xl w-[300px]">
            
            <div className="flex items-center gap-2 text-white font-medium justify-center">
                <p>LinkedIn</p>
                <LinkedinIcon/>
            </div>
          
        </Link>

        <Link href={""} className="text-center text-2xl font-bold capitalize cursor-pointer hover:scale-105 transition-all nav p-3 rounded-xl w-[300px]">
            <div className="flex items-center gap-2 text-white font-medium justify-center">
                <p>Gmail</p>
                <EmailIcon />
            </div>
           
        </Link>
      </div>
    </div>
  );
};

export default ContactForWork;
