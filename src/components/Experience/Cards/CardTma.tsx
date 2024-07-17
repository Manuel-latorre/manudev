"use client"

import Dot from "@/components/Dot/Dot";
import TmaIcon from "@/components/icons/TmaIcon";
import {
  CalendarIcon,
  MapPinIcon,
  MaximizeIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { MarqueeDiarc } from "../MarqueeStack/MarqueeDiarc";
import { MarqueeTma } from "../MarqueeStack/MarqueeTma";
import Modal from "../Modal";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import ReactIcon from "@/components/icons/ReactIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import FirebaseIcon from "@/components/icons/FirebaseIcon";
import CloudinaryIcon from "@/components/icons/CloudinaryIcon";
import { useLanguage } from "@/context/LanguageContext";

const CardTma = () => {

  const {isEnglish} = useLanguage()

  return (
    <div className="w-[33.3%] max-lg:w-full h-auto rounded-xl p-3 cardExp">
      <div className="flex items-center gap-3">
        <TmaIcon />
        <div>
          <p className="text-2xl font-semibold text-blue-200">Tu Mejor Amigo</p>
          <div className="flex items-center gap-1 text-black px-2 rounded-full bg-white mt-1 w-min">
            <MapPinIcon width={12} height={12} />
            <p className="text-xs font-medium">Mexico</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2  mt-4">
        <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
          <Dot />
          <p className="text-blue-200 font-medium text-sm">
            {isEnglish ? "Frontend Developer" : "Desarrollador Frontend"}
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
          <p className="text-blue-200 text-sm font-medium">
            {isEnglish ? "Nov 2023 - March 2024" : "Nov 2023 - Marzo 2024"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-10 flex-col">
        <div className="w-full">
          <Link
            href={
              "https://play.google.com/store/apps/details?id=com.tumejoramigo"
            }
            target="_blank"
            className="flex items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav"
          >
            {isEnglish ? "Visit" :"Visitar"}
            <SquareArrowOutUpRightIcon width={18} height={18} />
          </Link>
        </div>
        <div className="w-full">
          <Modal
            description={
              <div className="flex flex-col gap-2 text-blue-200">
                <div className="flex items-center gap-3">
                  <TmaIcon />
                  <div>
                    <p className="text-2xl font-semibold text-blue-200">
                      Tu Mejor Amigo
                    </p>
                    <div className="flex items-center gap-1 text-black px-2 rounded-full bg-white mt-1 w-min">
                      <MapPinIcon width={12} height={12} />
                      <p className="text-xs font-medium">México</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
                    <Dot />
                    <p className="text-blue-200 font-medium text-sm">
                      {isEnglish ? "Frontend Developer" : "Desarrollador Frontend"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
                    <p className="text-blue-200 text-sm font-medium">
                      {isEnglish ? "Nov 2023 - March 2024" : "Nov 2023 - Marzo 2024"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-12 text-base">
                  <p>
                    {isEnglish ? "At Tu Mejor Amigo, I have contributed as a Frontend Developer, focusing on creating intuitive and attractive user interfaces. My work has ranged from implementing essential functionalities for data management using GET, POST, PUT, and DELETE requests, to ensuring smooth interaction with the application's database." : "En Tu Mejor Amigo he contribuido como Desarrollador Frontend, enfocándome en la creación de interfaces de usuario intuitivas y atractivas. Mi trabajo ha abarcado desde la implementación de funcionalidades esenciales para la gestión de datos, utilizando peticiones GET, POST, PUT y DELETE, hasta asegurar una interacción fluida con la base de datos de la aplicación."}
                  </p>

                  <p className="text-xl text-[#f0f0f0] font-semibold">
                    {isEnglish ? "My biggest challengues" : "Mis mayores desafíos"}
                  </p>

                  <ul className="list-disc">
                    <li>
                     {isEnglish ? "Integrating an effective notification system using React Native Firebase Cloud Messaging." : "Integrar un sistema de notificaciones efectivo mediante React Native Firebase Cloud Messaging."}
                    </li>
                    <li>
                      {isEnglish ? "Incorporating a feature that allowed users to upload images of their pets and profile pictures through Cloudinary." : "Incorporación de una funcionalidad que permitió a los usuarios cargar imágenes de sus mascotas y tambien de perfil a través de Cloudinary."}
                    </li>
                  </ul>

                  <p className="text-xl text-[#f0f0f0] font-semibold">
                    {isEnglish ? "Technologies used" : "Tecnologías utilizadas"}
                  </p>

                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                      <TypescriptIcon />
                      Typescript
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                      <ReactIcon />
                      React Native
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                      <CSSIcon />
                      CSS
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                      <FirebaseIcon />
                      Firebase Cloud Messaging
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                      <CloudinaryIcon />
                      Cloudinary
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
      <div className="mt-8 borderBlur">
        <MarqueeTma />
      </div>
    </div>
  );
};

export default CardTma;
