import { Dock, DockIcon } from "@/components/magicui/dock";
import Image from "next/image";
import React from "react";
import avatar from '../../images/avatar1.png'
import BriefCaseIcon from "../icons/BriefCaseIcon";
import Link from "next/link";
import { BriefcaseIcon, CodeBracketIcon, EnvelopeIcon, UserIcon } from "@heroicons/react/24/outline";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function MobileMenu() {
  return (
    <div className="flex fixed bottom-0 z-20 w-full overflow-hidden md:shadow-xl sm:hidden">
    
      <Dock className="nav">
        <DockIcon>
          <Link href="#aboutme">
            <Image src={avatar} alt="avatar" width={50} height={50}/>
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="#experience">
            <BriefcaseIcon width={25} height={25} className="text-gray-200"/>
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="#skills">
            <CodeBracketIcon width={25} height={25} className="text-gray-200"/>
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="#contact">
            <EnvelopeIcon width={25} height={25} className="text-gray-200"/>
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}

