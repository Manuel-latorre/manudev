import Image from "next/image";import "../../app/globals.css";
import BriefCaseIcon from "../icons/BriefCaseIcon";
import tualo from "../../images/tualo.png";
import diarc from "../../images/diarc.png";
import tma from "../../images/tma.png";
import MexicoIcon from "../icons/MexicoIcon";
import ArgentinaIcon from "../icons/ArgentinaIcon";
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

const Experience = () => {
  return (
    <div className="xl:w-[60%] w-[90%] flex flex-col gap-3 mx-auto mt-32">
      <div className="flex items-center gap-1">
        <BriefCaseIcon />
        <p className="text-blue-200 font-semibold text-2xl">Experiencia</p>
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="w-[50%] h-[400px] rounded-3xl p-3 flex flex-col justify-between bgCard">
          <div className="bgText p-2 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                width={35}
                height={35}
                src={tualo}
                alt="tualo"
                className="rounded-md"
              />
              <p className="text-white font-medium text-xl">Tualo</p>
            </div>
            <p className="font-medium text-white">Mayo 2024 - Actual</p>
          </div>
          <div className="flex items-center gap-2 px-2 my-5">
            <MexicoIcon />
            <p className="font-medium text-white">México</p>
          </div>
        <div className="flex items-center gap-2">
            <Dot/>
            <p className="font-medium text-white">Fullstack Developer</p>
        </div>
          <div className="px-2">
            <p className="text-zinc-200">
              Se trata de un avanzado Dashboard diseñado específicamente para
              los clientes de Tualo. Esta innovadora plataforma está dividida en
              dos secciones principales: una para administradores y otra para
              clientes.{" "}
              <span className="underline text-sm text-blue-200">Ver más</span>
            </p>
          </div>

          <div>
            <Link href={""} className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[100px] justify-center">
                Visitar
                <ArrowRight/>
            </Link>
          </div>

          <div className="flex items-center gap-2 mt-3 text-zinc-300">
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <TypescriptIcon />
              <p>Typescript</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <NextIcon />
              <p>Next Js</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <TailwindIcon />
              <p>Tailwind css</p>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-[400px] rounded-3xl p-3 flex flex-col justify-between bgCard">
          <div className="bgText p-2 rounded-xl flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Image
                width={35}
                height={35}
                src={tualo}
                alt="tualo"
                className="rounded-md"
              />
              <p className="text-white font-medium text-xl">
                Tualo Landing Page
              </p>
            </div>
            <p className="font-medium text-white">Mayo 2024</p>
          </div>
          <div className="flex items-center gap-2 px-2 my-5">
            <MexicoIcon />
            <p className="font-medium text-white">México</p>
          </div>
          <div className="flex items-center gap-2">
            <Dot/>
            <p className="font-medium text-white">Frontend Developer</p>
        </div>
          <div className="px-2">
            <p className="text-zinc-200">
              He desarrollado este sitio web para Tualo, una empresa que se
              dedica al asesoramiento financiero. Esta Landing Page fue
              desarrollada con el fin de que la compañia pueda ofrecer sus
              servicios de una forma mas atractiva.{" "}
              <span className="underline text-sm text-blue-200">Ver más</span>
            </p>
          </div>

          <div>
            <Link href={""} className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[100px] justify-center">
                Visitar
                <ArrowRight/>
            </Link>
          </div>

          <div className="flex items-center gap-2 mt-3 text-zinc-300">
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <TypescriptIcon />
              <p>Typescript</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <NextIcon />
              <p>Next Js</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <TailwindIcon />
              <p>Tailwind css</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full">
        <div className="w-[50%] h-[400px] rounded-3xl p-3 flex flex-col justify-between bgCard">
          <div className="bgText p-2 rounded-xl flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Image
                width={35}
                height={35}
                src={diarc}
                alt="tualo"
                className="rounded-md"
              />
              <p className="text-white font-medium text-xl">Diarc Studio</p>
            </div>
            <p className="font-medium text-white">Abril 2024 - Mayo 2024</p>
          </div>
          <div className="flex items-center gap-2 px-2 my-5">
            <ArgentinaIcon />
            <p className="font-medium text-white">Argentina</p>
          </div>
          <div className="flex items-center gap-2">
            <Dot/>
            <p className="font-medium text-white">Fullstack Developer</p>
        </div>
          <div className="px-2">
            <p className="text-zinc-200">
              He desarrollado este sitio web para Diarc Studio, un estudio de
              Outsourcing de Arte 3D enfocado en el desarrollo de Experiencias
              Inmersivas, Metaversos y Gaming.{" "}
              <span className="underline text-sm text-blue-200">Ver más</span>
            </p>
          </div>

          <div>
            <Link href={""} className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[100px] justify-center">
                Visitar
                <ArrowRight/>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300">
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <TypescriptIcon />
              <p>Typescript</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <NextIcon />
              <p>Next Js</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <TailwindIcon />
              <p>Tailwind css</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <NodeIcon />
              <p>Node Js</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <CloudinaryIcon />
              <p>Cloudinary</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <ExpressIcon />
              <p>Express</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <MongoDbIcon />
              <p>MongoDB</p>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-[400px] rounded-3xl p-3 flex flex-col justify-between bgCard">
          <div className="bgText p-2 rounded-xl flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Image
                width={35}
                height={35}
                src={tma}
                alt="Tu mejor amigo"
                className="rounded-md"
              />
              <p className="text-white font-medium text-xl">Tu Mejor Amigo</p>
            </div>
            <p className="font-medium text-white">
              Noviembre 2023 - Marzo 2024
            </p>
          </div>
          <div className="flex items-center gap-2 px-2 my-5">
            <MexicoIcon />
            <p className="font-medium text-white">México</p>
          </div>
          <div className="flex items-center gap-2">
            <Dot/>
            <p className="font-medium text-white">Frontend Developer</p>
        </div>
          <div className="px-2">
            <p className="text-zinc-200">
              He contribuido significativamente al desarrollo de una innovadora
              aplicación de servicio de paseo de perros, enfocándome en la
              creación de interfaces de usuario intuitivas y atractivas.{" "}
              <span className="underline text-sm text-blue-200">Ver más</span>
            </p>
          </div>

          <div>
            <Link href={""} className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[100px] justify-center">
                Visitar
                <ArrowRight/>
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300">
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <TypescriptIcon />
              <p>Typescript</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <NextIcon />
              <p>Next Js</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <TailwindIcon />
              <p>Tailwind css</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <NodeIcon />
              <p>Node Js</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <CloudinaryIcon />
              <p>Cloudinary</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <ExpressIcon />
              <p>Express</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <MongoDbIcon />
              <p>MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
