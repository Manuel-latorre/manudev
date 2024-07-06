import {  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import TualoIcon from "../icons/TualoIcon";
import '../../app/globals.css'
import DiarcIcon from "../icons/DiarcIcon";
import TmaIcon from "../icons/TmaIcon";
import GtIcon from "../icons/GtIcon";
import ArgentinaIcon from "../icons/ArgentinaIcon";
import MexicoIcon from "../icons/MexicoIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import TailwindIcon from "../icons/TailwindIcon";
import NextIcon from "../icons/NextIcon";
import NodeIcon from "../icons/NodeIcon";
import CloudinaryIcon from "../icons/CloudinaryIcon";
import ExpressIcon from "../icons/ExpressIcon";
import MongoDbIcon from "../icons/MongoDbIcon";
import Link from "next/link";
import ArrowRight from "../icons/ArrowRight";
import Dot from "../Dot/Dot";
import SupabaseIcon from "../icons/SupabaseIcon";
import ChatGPTIcon from "../icons/ChatGPTIcon";
import ExpandIcon from "../icons/ExpandIcon";
import CarouselCards from "./CarouselCards";
import Modal from "./Modal";
import RedirectProjectIcon from "../icons/RedirectProjectIcon";

const features = [
  {
    Icon: DiarcIcon,
    name: "Diarc Studio",
    description: 
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 mt-2">
              <Dot />
              <p className="font-medium text-white">Freelance</p>
            </div>

            <div className="flex items-center gap-2">
              <ArgentinaIcon />
              <p className="font-medium text-white">Argentina</p>
              <span className="text-blue-200 font-bold">|</span>
              <p className="font-medium text-white">Abril - Mayo 2024</p>
            </div>
        </div>,
    href: "/",
    linkProject: 
        <Link href={""} className="flex items-center gap-2 bg-white rounded-lg p-2 text-[#14192E]">
            Visitar
            <RedirectProjectIcon/>
        </Link> ,
    modal: <Modal title="" description={<div></div>}/>,
    background: <img  className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bgCardDiarc",
  },
  {
    Icon: TualoIcon,
    name: "Tualo Web",
    description: 
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 mt-2">
              <Dot />
              <p className="font-medium text-white">Desarrollador Frontend</p>
            </div>

            <div className="flex items-center gap-2">
              <MexicoIcon />
              <p className="font-medium text-white">México</p>
              <span className="text-blue-200 font-bold">|</span>
              <p className="font-medium text-white">Mayo 2024</p>
            </div>
        </div>,
    href: "/",
    linkProject: 
    <Link href={""} className="flex items-center gap-2 bg-white rounded-lg p-2 text-[#14192E]">
        Visitar
        <RedirectProjectIcon/>
    </Link> ,
    modal: <Modal title="" description={<div></div>}/>,
    background: <img className="absolute -right-20 -top-50 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 bgCardTualo",
  },
  {
    Icon: TmaIcon,
    name: "Tu Mejor Amigo",
    description: 
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 mt-2">
              <Dot />
              <p className="font-medium text-white">Desarrollador Frontend</p>
            </div>

            <div className="flex items-center gap-2">
              <MexicoIcon />
              <p className="font-medium text-white">México</p>
              <span className="text-blue-200 font-bold">|</span>
              <p className="font-medium text-white">Nov 2023 - Marzo 2024</p>
            </div>
        </div>,
    href: "/",
    modal: <Modal title="" description={<div></div>}/>,
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 bgCardTma",
  },
  {
    Icon: TualoIcon,
    name: "Tualo",
    description: 
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 mt-2">
              <Dot />
              <p className="font-medium text-white">Desarrollador Fullstack</p>
            </div>

            <div className="flex items-center gap-2">
              <MexicoIcon />
              <p className="font-medium text-white">México</p>
              <span className="text-blue-200 font-bold">|</span>
              <p className="font-medium text-white">Mayo 2024 - Actual</p>
            </div>
        </div>,
    href: "/",
    modal: <Modal title="" description={<div></div>}/>,
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bgCardTualoDash",
  },
  {
    Icon: GtIcon,
    name: "Generación Tech",
    description: 
        <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 mt-2">
              <Dot />
              <p className="font-medium text-white">Desarrollador Frontend</p>
            </div>

            <div className="flex items-center gap-2">
              <ArgentinaIcon />
              <p className="font-medium text-white">Argentina</p>
              <span className="text-blue-200 font-bold">|</span>
              <p className="font-medium text-white">Oct 2023</p>
            </div>
        </div>,
    href: "/",
    linkProject: 
    <Link href={""} className="flex items-center gap-2 bg-white rounded-lg p-2 text-[#14192E]">
        Visitar
        <RedirectProjectIcon/>
    </Link> ,
    modal: <Modal title="" description={<div></div>}/>,
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4 bgCardGt",
  },
];

export function ExperienceBentoDemo() {
  return (
    <div className="my-36">
      <BentoGrid className="lg:grid-rows-3 w-[70%] mx-auto">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
