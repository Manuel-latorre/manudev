import Image from 'next/image'
import React from 'react'
import avatar from '../../images/avatar1.png'
import Link from 'next/link'
import { InboxIcon, MessageCircleIcon } from 'lucide-react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'
import LinkedinIcon from '../icons/LinkedinIcon'
import RedirectIcon from '../icons/RedirectIcon'
import GithubIcon from '../icons/GithubIcon'

const Footer = () => {
  return (
    <div className='w-[70%] mx-auto flex items-center justify-between nav p-4 rounded-full mb-5'>
        <div>
            <Image src={avatar} alt="avatar" width={100} height={100} className="hover:rotate-[360deg] transition-all duration-700 cursor-pointer"/>
        </div>

        <div className='flex items-center gap-3 text-[#f0f0f0]'>
            <Link href={""}>Sobre mi</Link>
            <Link href={""}>Experiencia</Link>
            <Link href={""}>Tecnologías</Link>
        </div>
       
        <div className='flex items-center gap-3'>
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
        </div>
       

    </div>
  )
}

export default Footer