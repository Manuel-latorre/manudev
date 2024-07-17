"use client"

import Image from 'next/image'
import React from 'react'
import avatar from '../../images/avatar1.png'
import Link from 'next/link'
import { InboxIcon, MessageCircleIcon } from 'lucide-react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import LinkedinIcon from '../icons/LinkedinIcon'
import RedirectIcon from '../icons/RedirectIcon'
import GithubIcon from '../icons/GithubIcon'
import { useLanguage } from '@/context/LanguageContext'

const Footer = () => {
    const {isEnglish} = useLanguage()
  return (
    <div className='lg:w-[70%] w-[90%] mx-auto flex items-center justify-between nav p-4 rounded-full mb-5 max-sm:hidden'>
        <div>
            <Image src={avatar} alt="avatar" width={60} height={60} className="hover:rotate-[360deg] transition-all duration-700 cursor-pointer max-lg:w-[70px] max-lg:h-[70px]"/>
        </div>

        <div className='flex items-center gap-3 text-[#f0f0f0]'>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>{isEnglish ? "About me" : "Sobre mi"}</Link>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>{isEnglish ? "Experience" : "Experiencia"}</Link>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>{isEnglish ? "Skills" : "Habilidades"}</Link>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>{isEnglish ? "Contact" : "Contacto"}</Link>
        </div>
       
        <div className='flex items-center gap-3'>
            <Link href="https://www.linkedin.com/in/manuel-latorre-936b72223/" passHref>
                <div className="flex items-center group">
                    <LinkedinIcon className="group-hover:hidden transition-opacity duration-300" />
                    <RedirectIcon className="hidden group-hover:block transition-opacity duration-300" />
                </div>
            </Link>
                <a href={`mailto:manuel.latorre11@gmail.com`} title={`Enviar un correo electronico a manuel.latorre11@gmail.com`} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                    <GithubIcon className="group-hover:hidden" />
                    <RedirectIcon className="hidden group-hover:block" />
                </a>
        </div>
       

    </div>
  )
}

export default Footer