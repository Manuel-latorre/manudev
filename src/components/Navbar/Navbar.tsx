import Link from "next/link";
import "../../app/globals.css";
import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import RedirectIcon from "../icons/RedirectIcon";
import Image from "next/image";
import avatar from '../../images/avatar1.png'
import ConfigIcon from "../icons/ConfigIcon";

const Navbar = () => {
  return (
    <nav className="xl:w-[60%] w-[90%] py-2 px-3 rounded-full flex items-center justify-between mx-auto mt-5 sticky top-5 shadow-md z-10 nav">
      
      <div>
        <Image src={avatar} alt="avatar" width={50} height={50} className="hover:rotate-[360deg] transition-all duration-700 cursor-pointer"/>
      </div>
      
      <div className="flex items-center gap-4">
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>About me</Link>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>Experience</Link>
        <Link className="text-white font-medium hover:text-zinc-200" href={""}>Projects</Link>
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
        
        <ConfigIcon className="group-hover:hidden" />
            
      </div>
    </nav>
  );
};

export default Navbar;
