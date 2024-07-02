import Link from "next/link";
import React from "react";
import GmailIcon from "../icons/GmailIcon";
import RedirectIcon from "../icons/RedirectIcon";
import LinkedinOutlineIcon from "../icons/LinkedinOutlineIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import EmailIcon from "../icons/EmailIcon";
import ShineBorder from "../magicui/shine-border";

const ContactForWork = () => {
  return (
    <div className="flex items-center justify-between lg:w-[70%] w-[90%] mx-auto my-32 max-md:flex-col max-md:text-center max-md:gap-12">
      <div className="flex flex-col gap-8">
        <p className="bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent xl:text-3xl 2xl:text-4xl text-2xl font-bold max-sm:text-2xl">
          ¿Tienes un proyecto en mente?
        </p>
        <p className="text-zinc-100 xl:text-3xl 2xl:text-4xl text-2xl font-bold">
          ¡Contáctame y hagamos que suceda!
        </p>
      </div>
      <div className="flex flex-col gap-4">
        
        <Link href={""}>
            <ShineBorder
            className="text-center text-2xl font-bold capitalize cursor-pointer hover:scale-105 transition-all"
            color={["#2E65E2", "#4755DB", "#32CBDF"]}
            >
            <div className="flex items-center gap-2 text-white font-medium justify-center">
                <p>LinkedIn</p>
                <LinkedinIcon/>
            </div>
            </ShineBorder>
        </Link>

        <Link href={""}>
            <ShineBorder
            className="text-center text-2xl font-bold capitalize cursor-pointer hover:scale-105 transition-all"
            color={["#2E65E2", "#4755DB", "#32CBDF"]}
            >
            <div className="flex items-center gap-2 text-white font-medium justify-center">
                <p>Gmail</p>
                <EmailIcon />
            </div>
            </ShineBorder>
        </Link>
      </div>
    </div>
  );
};

export default ContactForWork;
