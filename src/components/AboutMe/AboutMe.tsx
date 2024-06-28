import React from 'react'
import Link from 'next/link'
import Dot from '../Dot/Dot'
import RedirectIcon from '../icons/RedirectIcon'
import GithubOutlineIcon from '../icons/GithubOutlineIcon'
import LinkedinOutlineIcon from '../icons/LinkedinOutlineIcon'
import CVIcon from '../icons/CVIcon'
import GmailIcon from '../icons/GmailIcon'

const AboutMe = () => {
  return (
    <div className='flex flex-col gap-2 lg:w-[70%] w-[90%] mx-auto mt-32'>
        <div className='flex flex-col gap-2 max-sm:items-center'>
            <h1 className='text-zinc-100 md:text-4xl text-3xl font-bold'>Manuel Latorre</h1>
            <h2 className='bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent md:text-4xl text-3xl font-bold'>Fullstack Web Developer</h2>
            <p className='lg:w-[70%] text-zinc-200 max-sm:text-center max-sm:mt-2'>
                Cuento con experiencia en el desarrollo de diversos tipos de aplicaciones, incluyendo sitios web y plataformas de administración de datos. Mi enfoque se centra en crear soluciones tecnológicas que mejoren la eficiencia y la experiencia del usuario.
            </p>
            <div className='flex items-center gap-2'>
              <div className='max-sm:hidden'>
                <Dot/>
              </div>
                <p className='text-zinc-200 max-sm:text-center'>Actuálmente trabajo en <span><Link className='text-blue-200 font-medium' href={""}>Tualo</Link></span> y también como Freelance.</p>
            </div>

            <div className="flex items-center gap-3 mt-5">
        <Link href="https://www.linkedin.com/in/tu-perfil" passHref>
          <div className="flex items-center group">
            <LinkedinOutlineIcon className="group-hover:hidden transition-opacity duration-300" />
            <RedirectIcon className="hidden group-hover:block transition-opacity duration-300" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/tu-perfil" passHref>
          <div className="flex items-center group">
            <GithubOutlineIcon className="group-hover:hidden" />
            <RedirectIcon className="hidden group-hover:block" />
          </div>
        </Link>
        <Link href="https://www.linkedin.com/in/tu-perfil" passHref>
          <div className="flex items-center group">
            <GmailIcon className="group-hover:hidden" />
            <RedirectIcon className="hidden group-hover:block" />
          </div>
        </Link>
        
        <CVIcon className="group-hover:hidden" />
      </div>
        </div>
    </div>
  )
}

export default AboutMe