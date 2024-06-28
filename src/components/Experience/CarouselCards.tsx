import {  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Dot from "../Dot/Dot";
import MexicoIcon from "../icons/MexicoIcon";
import ExpandIcon from "../icons/ExpandIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import NextIcon from "../icons/NextIcon";
import TailwindIcon from "../icons/TailwindIcon";
import NodeIcon from "../icons/NodeIcon";
import SupabaseIcon from "../icons/SupabaseIcon";
import ChatGPTIcon from "../icons/ChatGPTIcon";
import tualo from "../../images/tualo.png";
import diarc from "../../images/diarc.png";
import tma from "../../images/tma.png";
import ArrowRight from "../icons/ArrowRight";
import Link from "next/link";
import CloudinaryIcon from "../icons/CloudinaryIcon";
import ExpressIcon from "../icons/ExpressIcon";
import MongoDbIcon from "../icons/MongoDbIcon";
import ArgentinaIcon from "../icons/ArgentinaIcon";

const CarouselCards = () => {
  return (
    <Carousel className="xl:hidden">
      <CarouselContent>
        <CarouselItem>
          <div className="w-full h-[400px] max-md:h-[480px]  rounded-3xl p-3 flex flex-col bgCardTualoDash">
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
              <div className="flex items-center gap-2 max-md:hidden">
                <Dot />
                <p className="font-medium text-white">Fullstack Developer</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2">
                <MexicoIcon />
                <p className="font-medium text-white">México</p>
                <span className="text-blue-200 font-bold">|</span>
                <p className="font-medium text-white">Mayo 2024 - Actual</p>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                    <Dot />
                <p className="font-medium text-white">Fullstack Developer</p>
              </div>
            </div>

            <div className="px-2 mt-5 max-md:hidden">
              <p className="text-zinc-200">
                Se trata de un avanzado Dashboard diseñado específicamente para
                los clientes de Tualo. Esta innovadora plataforma está dividida
                en dos secciones principales: una para administradores y otra
                para clientes.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-4">
              <button className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[200px] justify-center">
                Más información
                <ExpandIcon />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1 max-md:justify-center">
              <div className="bgText flex items-center gap-2 px-2.5 py-1 rounded-2xl">
                <TypescriptIcon />
                <p>Typescript</p>
              </div>
              <div className="bgText flex items-center gap-2 px-2.5 py-1 rounded-2xl">
                <NextIcon />
                <p>Next Js</p>
              </div>
              <div className="bgText flex items-center gap-2 px-2.5 py-1 rounded-2xl">
                <TailwindIcon />
                <p>Tailwind css</p>
              </div>

              <div className="bgText flex items-center gap-2 px-2.5 py-1 rounded-2xl">
                <NodeIcon />
                <p>Node Js</p>
              </div>

              <div className="bgText flex items-center gap-2 px-2.5 py-1 rounded-2xl">
                <SupabaseIcon />
                <p>Supabase</p>
              </div>

              <div className="bgText flex items-center gap-2 px-2.5 py-1 rounded-2xl">
                <ChatGPTIcon />
                <p>Open AI</p>
              </div>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem>
          <div className="w-full h-[400px] max-md:h-[480px]   rounded-3xl p-3 flex flex-col bgCardTualo">
            <div className="bgText p-2 rounded-xl flex items-center justify-between">
              <div className=" flex items-center gap-2">
                <Image
                  width={35}
                  height={35}
                  src={tualo}
                  alt="tualo"
                  className="rounded-md"
                />
                <p className="text-white font-medium text-xl">Tualo Web</p>
              </div>
              <div className="flex items-center gap-2 max-md:hidden">
                <Dot />
                <p className="font-medium text-white">Frontend Developer</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2 px-2">
                <MexicoIcon />
                <p className="font-medium text-white">México</p>
                <span className="text-blue-200 font-bold">|</span>
                <p className="font-medium text-white">Mayo 2024</p>
              </div>
              <div className="flex items-center gap-2 md:hidden">
                <Dot />
                <p className="font-medium text-white">Frontend Developer</p>
              </div>
            </div>

            <div className="px-2 mt-5 max-md:hidden">
              <p className="text-zinc-200">
                He desarrollado este sitio web para Tualo, una empresa que se
                dedica al asesoramiento financiero. Esta Landing Page fue
                desarrollada con el fin de que la compañia pueda ofrecer sus
                servicios de una forma mas atractiva.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <button className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[200px] justify-center">
                Acerca del proyecto
                <ExpandIcon />
              </button>
              <Link
                href={""}
                className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[100px] justify-center"
              >
                Visitar
                <ArrowRight />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1 max-md:justify-center">
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
        </CarouselItem>

        <CarouselItem>
          <div className="w-full h-[400px] max-md:h-[480px]  rounded-3xl p-3 flex flex-col bgCardDiarc">
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
              <div className="flex items-center gap-2 max-md:hidden">
                <Dot />
                <p className="font-medium text-white">Fullstack Developer</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2 px-2">
                <ArgentinaIcon />
                <p className="font-medium text-white">Argentina</p>
                <span className="text-blue-200 font-bold">|</span>
                <p className="font-medium text-white max-md:text-sm">Abril 2024 - Mayo 2024</p>
              </div>
              <div className="flex items-center gap-2 px-2 md:hidden">
                <Dot />
                <p className="font-medium text-white">Fullstack Developer</p>
              </div>
              <div className="flex items-center gap-2 px-2">
                <Dot />
                <p className="font-medium text-white">Freelance</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-5">
              <button className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[200px] justify-center">
                Acerca del proyecto
                <ExpandIcon />
              </button>
              <Link
                href={""}
                className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[100px] justify-center"
              >
                Visitar
                <ArrowRight />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1 max-md:justify-center">
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
        </CarouselItem>

        <CarouselItem>
        <div className="w-full h-[400px] max-md:h-[480px]  rounded-3xl p-3 flex flex-col bgCardTma">
          <div className="bgText p-2 rounded-xl flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <Image
                width={35}
                height={35}
                src={tma}
                alt="Tu mejor amigo"
                className="rounded-md bg-[#827AB6]"
              />
              <p className="text-white font-medium text-xl">Tu Mejor Amigo</p>
            </div>
            <div className="flex items-center gap-2 px-2 max-md:hidden">
              <Dot />
              <p className="font-medium text-white">Frontend Developer</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-2 px-2">
              <MexicoIcon />
              <p className="font-medium text-white">México</p>
              <span className="text-blue-200 font-bold">|</span>
              <p className="font-medium text-white max-md:text-sm">
                Nov 2023 - Marzo 2024
              </p>
            </div>
            <div className="flex items-center gap-2 px-2 md:hidden">
              <Dot />
              <p className="font-medium text-white">Frontend Developer</p>
            </div>
          </div>

          <div className="px-2 mt-5 max-md:hidden">
            <p className="text-zinc-200">
              He contribuido significativamente al desarrollo de una innovadora
              aplicación de servicio de paseo de perros, enfocándome en la
              creación de interfaces de usuario intuitivas y atractivas.
              
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <button className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[200px] justify-center">
              Acerca del proyecto
              <ExpandIcon />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1 max-md:justify-center">
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
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious  className="max-lg:hidden"/>
      <CarouselNext className="max-lg:hidden"/>
    </Carousel>
  );
};

export default CarouselCards;
