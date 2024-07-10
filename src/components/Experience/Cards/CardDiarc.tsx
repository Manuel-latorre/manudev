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
import DiarcIcon from "@/components/icons/DiarcIcon";
import { MarqueeDiarc } from "../MarqueeStack/MarqueeDiarc";
import Modal from "../Modal";
import TypescriptIcon from "@/components/icons/TypescriptIcon";
import NextIcon from "@/components/icons/NextIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import ExpressIcon from "@/components/icons/ExpressIcon";
import CloudinaryIcon from "@/components/icons/CloudinaryIcon";
import MongoDbIcon from "@/components/icons/MongoDbIcon";

const CardDiarc = () => {
  return (
    <div className="w-[50%] max-lg:w-full h-auto rounded-xl p-3 cardExp">
      <div className="flex items-center gap-3">
        <DiarcIcon />
        <div>
          <p className="text-2xl font-semibold text-blue-200">Diarc Studio</p>
          <div className="flex items-center gap-1 text-black px-2 rounded-full bg-white mt-1 w-min">
            <MapPinIcon width={12} height={12} />
            <p className="text-xs font-medium">Argentina</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap mt-4">
        <div className="flex items-center gap-2 rounded-full nav w-min px-2 justify-center">
          <Dot />
          <p className="text-blue-200 font-medium text-sm">Freelance</p>
        </div>
        <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
          <p className="text-blue-200 text-sm font-medium">Abril - Mayo 2024</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-10 max-lg:flex-col">
        <div className="lg:w-[50%] w-full">
          <Link
            href={"https://www.diarc.studio/"}
            className="flex items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav"
          >
            Visitar
            <SquareArrowOutUpRightIcon width={18} height={18} />
          </Link>
        </div>
        <div className="lg:w-[50%] w-full">
          <Modal
            description={
              <div className="flex flex-col gap-2 text-blue-200">
                <div className="flex items-center gap-3">
                  <DiarcIcon />
                  <div>
                    <p className="text-2xl font-semibold text-blue-200">
                      Diarc Studio
                    </p>
                    <div className="flex items-center gap-1 text-black px-2 rounded-full bg-white mt-1 w-min">
                      <MapPinIcon width={12} height={12} />
                      <p className="text-xs font-medium">Argentina</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap mt-4">
                  <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
                    <Dot />
                    <p className="text-blue-200 font-medium text-sm">
                      Freelance
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full nav px-2 justify-center">
                    <p className="text-blue-200 text-sm font-medium">
                      Abril - Mayo 2024
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-12 text-base">
                  <p>
                    He desarrollado este sitio web para Diarc Studio, un estudio de Outsourcing de Arte 3D enfocado en el desarrollo de Experiencias Inmersivas, Metaversos y Gaming. Este sitio cuenta con 4 secciones en donde se muestran distintos tipos de información de la compañía. La sección Portfolio es donde se muestran los proyectos de la compañía. Para esto integré un sistema de administrador con tecnologías como Mongo DB para almacenar los proyectos en la base de datos y Cloudinary para el alojamiento de archivos multimedia. En este se pueden agregar, editar y eliminar proyectos.
                  </p>

                  <p className="text-xl text-[#f0f0f0] font-semibold">
                    Mis mayores desafíos
                  </p>

                  <ul className="list-disc">
                    <li>
                        Llevar a cabo correctamente las idéas del cliente.
                    </li>
                    <li>
                        Realizar efectos y transiciones como el que se aprecia en el Home.
                    </li>
                    <li>
                        Integrar un sistema CRUD para la administracion del portfolio de la compañia.
                    </li>
                  </ul>

                  <p className="text-xl text-[#f0f0f0] font-semibold">
                    Tecnologías utilizadas
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
                        <NodeIcon/>
                        Node Js
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <MongoDbIcon/>
                        Mongo DB
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <ExpressIcon/>
                        Express
                    </div>
                    <div className="text-sm font-medium text-[#f0f0f0] flex items-center gap-2 px-2 py-1 nav rounded-full">
                        <CloudinaryIcon/>
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
        <MarqueeDiarc />
      </div>
    </div>
  );
};

export default CardDiarc;
