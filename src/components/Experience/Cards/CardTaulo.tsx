"use client"

import Dot from "@/components/Dot/Dot";
import TualoIcon from "@/components/icons/TualoIcon";
import {
  MapPinIcon,
  MaximizeIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { MarqueeStack } from "../MarqueeStack";
import { MarqueeTualo } from "../MarqueeStack/MarqueeTualo";
import Modal from "../Modal";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import NextIcon from "@/components/icons/NextIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import SupabaseIcon from "@/components/icons/SupabaseIcon";
import ChatGPTIcon from "@/components/icons/ChatGPTIcon";
import { useLanguage } from "@/context/LanguageContext";

const CardTaulo = () => {
  const {isEnglish} = useLanguage()
  return (
    <div className="w-[50%] max-lg:w-full h-auto rounded-xl p-3 cardExp">
      <div className="flex items-center gap-3">
        <TualoIcon />
        <div>
          <p className="text-2xl font-semibold text-blue-200">Tualo</p>
          <div className="flex items-center gap-1 text-black px-2 rounded-full bg-white mt-1">
            <MapPinIcon width={12} height={12} />
            <p className="text-xs font-medium">Mexico</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap mt-4">
        <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
          <Dot />
          <p className="text-blue-200 font-medium text-sm">
            Desarrollador Fullstack
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
          <p className="text-blue-200 text-sm font-medium">
            {isEnglish ? "April 2024 - Actual" : "Abril 2024 - Actual"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-10 max-lg:flex-col">
        <div className="lg:w-[50%] w-full">
          <Link
            href={"https://www.tualo.mx/"}
            className="flex items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav"
          >
            {isEnglish ? "Visit" :"Visitar"}
            <SquareArrowOutUpRightIcon width={18} height={18} />
          </Link>
        </div>
        <div className="lg:w-[50%] w-full">
          <Modal
            description={
              <div className="flex flex-col gap-2 text-blue-200">
                <div className="flex items-center gap-3">
                  <TualoIcon />
                  <div>
                    <p className="text-2xl font-semibold text-blue-200">
                      Tualo
                    </p>
                    <div className="flex items-center gap-1 text-black px-2 rounded-full bg-white mt-1">
                      <MapPinIcon width={12} height={12} />
                      <p className="text-xs font-medium">México</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
                    <Dot />
                    <p className="text-blue-200 font-medium text-sm">
                      {isEnglish ? "Fullstack Developer" : "Desarrollador Fullstack"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
                    <p className="text-blue-200 text-sm font-medium">
                      {isEnglish ? "April 2024 - Actual" : "Abril 2024 - Actual"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-12 text-base mb-5">
                    <p>
                        {isEnglish ? "I am currently working as a Fullstack Developer at Tualo, a company dedicated to financial advisory. It generates monthly financial reports using AI, client-specific graphs, and more." : "Actualmente estoy trabajando como Desarrollador Fullstack en Tualo, una empresa que se dedica al asesoramiento financiero, la cual genera reportes financieros mensuales con IA, gráficas adecuadas al cliente y más."}
                    </p>
                    {
                      isEnglish ? 
                      <p>In my early days at the company, being a growing business, I was responsible for developing its website.</p> : 
                      <p>En mis inicios en la empresa, al ser una compañía en crecimiento, fui el responsable de desarrollar el <span><Link href={"https://www.tualo.mx/"} className="underline">sitio web</Link></span> de la misma.</p> 
                    }
                    
                    <p>{isEnglish ? "Later, the development team and I began developing the platform for Tualo's clients. It is a platform divided into two sections: one for administrators and one for clients." : "Luego, con el equipo de desarrollo se comenzó a desarrollar la plataforma para los clientes de Tualo. Se trata de una plataforma dividida en dos secciones: una para administradores y otra para clientes."}</p>

                    <p className="text-xl text-[#f0f0f0] font-semibold">{isEnglish ? "My tasks" : "Mis tareas"}</p>
                    <p>{isEnglish ? "In this project, I am responsible for various essential tasks, such as developing the user interface for the entire platform. I also handle complex interactions with the database to enable different functionalities of the site. Additionally, I have integrated forms that allow the upload of various types of files, such as images, PDF documents, and Excel documents, thus facilitating the incorporation and management of important documents by the users." : "En este proyecto, me encargo de diversas tareas esenciales, como el desarrollo de la interfaz de usuario para toda la plataforma. También realizo interacciones complejas con la base de datos para habilitar distintas funcionalidades del sitio. Además, he integrado formularios que permiten la carga de diversos tipos de archivos, como imágenes, documentos PDF y documentos de Excel, facilitando así la incorporación y gestión de documentos importantes por parte de los usuarios."}</p>
                    <p>{isEnglish ? "Additionally, I participated in the integration of the payment gateway to manage client subscriptions." : "Por otra parte, también participé en la integración de la pasarela de pago para manejar las subscripciones de los clientes."} </p>
                </div>

                  <p className="text-xl text-[#f0f0f0] font-semibold">
                    {isEnglish ? "Technologies used" : "Tecnologías utilizadas"}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <TypescriptIcon/>
                        Typescript
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <NextIcon/>
                        Next Js
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <CSSIcon/>
                        CSS
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <TailwindIcon/>
                        Tailwind css
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <SupabaseIcon/>
                        Supabase
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <ChatGPTIcon/>
                        Open AI
                    </div>
                  </div>
              </div>
            }
          />
        </div>
      </div>
      <div className="mt-8 borderBlur">
        <MarqueeTualo />
      </div>
    </div>
  );
};

export default CardTaulo;
