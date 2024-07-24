"use client"



import "../../app/globals.css";
import CardTaulo from "./Cards/CardTaulo";
import CardDiarc from "./Cards/CardDiarc";
import CardTma from "./Cards/CardTma";
import CardGt from "./Cards/CardGt";
import {
  BookOpenIcon,
  DownloadIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";
import Meteors from "../magicui/meteors";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Experience = () => {
  const {isEnglish} = useLanguage()
  return (
    <div className="lg:w-[70%] w-[90%] mx-auto flex flex-col gap-4 text-blue-200 ">
      <p className='font-bold text-4xl mb-2'>{isEnglish ? "Experience" : "Experiencia"}</p>

      <div className="w-full flex items-center gap-4 max-lg:flex-col">
        <CardTaulo />
        <CardDiarc />
      </div>
      <div className="w-full flex items-center gap-4 max-lg:flex-col">
        <CardTma />
        <CardGt />
        <div className="w-full h-[350px] flex lg:flex-col gap-4">
          <div className="relative flex justify-center w-full h-[50%] rounded-xl overflow-hidden nav">
            <Meteors number={30} />
              <a className="flex items-center justify-center gap-2 p-2 rounded-xl text-[#f0f0f0] w-full" href={isEnglish ? "/Manuel-Latorre-Fullstack-Web-Developer.pdf" : "/Manuel-Latorre-Desarrollador-Web-Fullstack.pdf"} download={isEnglish ? "Manuel-Latorre-Fullstack-Web-Developer" : "Manuel-Latorre-Desarrollador-Web-Fullstack"}>
              <button className="flex items-center gap-2"> 
                <DownloadIcon width={20} height={20} />
                Descargar CV
              </button>
            </a>
          </div>

          <div className="relative flex justify-center w-full h-[50%] rounded-xl overflow-hidden nav">
            <Meteors number={30} />
            <Link href={isEnglish ? "https://drive.google.com/file/d/1-UqMLpdjAzBvnvBRvxL5wLYnejB9Gt7K/view?usp=sharing" : "https://drive.google.com/file/d/1yOTZCfuJUdc7urzTARkOd32RFF9hZIlX/view?usp=sharing"} target="_blank" className="flex items-center justify-center gap-2 p-2 rounded-xl text-[#f0f0f0] w-full">
              <SquareArrowOutUpRightIcon width={20} height={20} />
              Abrir CV
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
