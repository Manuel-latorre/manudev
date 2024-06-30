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
import SupabaseIcon from "../icons/SupabaseIcon";
import ChatGPTIcon from "../icons/ChatGPTIcon";
import ExpandIcon from "../icons/ExpandIcon";
import CarouselCards from "./CarouselCards";
import Modal from "./Modal";
import RedirectProjectIcon from "../icons/RedirectProjectIcon";



const Experience = () => {
  return (
    <div className="lg:w-[70%] w-[90%] flex flex-col gap-3 mx-auto mt-32">
      <div className="flex items-center gap-1">
        <BriefCaseIcon />
        <p className="text-blue-200 font-semibold text-2xl">Experiencia</p>
      </div>
      <div className="flex items-center gap-3 w-full max-xl:hidden">
        <div className="w-[50%] h-[400px] max-2xl:h-[450px] rounded-3xl p-3 flex flex-col bgCardTualoDash">
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
            <div className="flex items-center gap-2">
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
          </div>

          <div className="px-2 mt-5">
            <p className="text-zinc-200">
              Se trata de un avanzado Dashboard diseñado específicamente para
              los clientes de Tualo. Esta innovadora plataforma está dividida en
              dos secciones principales: una para administradores y otra para
              clientes.{" "}
              <Modal
                title="Tualo"
                description={
                  <div className="mt-3 flex flex-col gap-4 text-zinc-300">
                    <p>
                      Se trata de un avanzado Dashboard diseñado específicamente
                      para los clientes de Tualo. Esta innovadora plataforma
                      está dividida en dos secciones principales: una para
                      administradores y otra para clientes. Los administradores
                      pueden generar reportes mensuales de las empresas clientas
                      mediante la integración de inteligencia artificial ChatGPT
                      y desde la perspectiva de los clientes, la plataforma
                      ofrece una experiencia de usuario intuitiva y accesible,
                      permitiéndoles visualizar y analizar los informes
                      generados por los administradores.
                    </p>

                    <div className="flex flex-col gap-5">
                      <p className="font-medium text-lg text-blue-200">
                        Mis tareas
                      </p>

                      <ul className="list-disc flex flex-col gap-4 px-2">
                        <li>
                          Me encargo de diversas tareas esenciales, como el
                          diseño y desarrollo de la interfaz de usuario para
                          toda la plataforma. Esto incluye crear un entorno
                          visualmente atractivo y fácil de navegar que mejore la
                          experiencia del usuario.
                        </li>
                        <li>
                          También realizo interacciones complejas con la base de
                          datos para habilitar distintas funcionalidades del
                          sitio, asegurando que la información sea gestionada y
                          presentada de manera eficiente.
                        </li>
                        <li>
                          Además, he integrado formularios que permiten la carga
                          de diversos tipos de archivos, como imágenes y
                          documentos PDF, facilitando así la incorporación y
                          gestión de documentos importantes por parte de los
                          usuarios.
                        </li>
                      </ul>
                    </div>
                  </div>
                }
              />
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1">
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

        <div className="w-[50%] h-[400px] max-2xl:h-[450px] rounded-3xl p-3 flex flex-col bgCardTualo">
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
            <div className="flex items-center gap-2">
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
          </div>

          <div className="px-2 mt-5">
            <p className="text-zinc-200">
              He desarrollado este sitio web para Tualo, una empresa que se
              dedica al asesoramiento financiero. Esta Landing Page fue
              desarrollada con el fin de que la compañia pueda ofrecer sus
              servicios de una forma mas atractiva.{" "}
              <Modal
                title="Tualo Web"
                description={
                  <div className="mt-3 flex flex-col gap-4 text-zinc-300">
                    <p>
                      He desarrollado este sitio web para Tualo, una empresa que
                      se dedica al asesoramiento financiero, la cual genera
                      reportes financieros mensuales con AI, gráficas adecuadas
                      al cliente y más. Esta Landing Page fue desarrollada con
                      el fin de que la compañia pueda ofrecer sus servicios de
                      una forma mas atractiva, la cual cuenta con 4 secciones en
                      donde se detalla especificamente que es lo que la empresa
                      ofrece. Además, este sito web está optimizado para la
                      experiencia del usuario, con una navegación intuitiva y un
                      diseño atractivo que capta la atención desde el primer
                      momento. La combinación de tecnología avanzada y un
                      enfoque centrado en el cliente hace de Tualo una opción
                      ideal para empresas que buscan mejorar su gestión
                      financiera a través de soluciones innovadoras y efectivas.
                    </p>
                  </div>
                }
              />
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <Link
              href={""}
              className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[100px] justify-center"
            >
              Visitar
              <RedirectProjectIcon/>
            </Link>
            
          </div>

          <div className="flex items-center gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1">
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
      <div className="flex items-center gap-3 w-full max-xl:hidden">
        <div className="w-[50%] h-[400px] max-2xl:h-[450px] rounded-3xl p-3 flex flex-col bgCardDiarc">
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
            <div className="flex items-center gap-2">
              <Dot />
              <p className="font-medium text-white">Fullstack Developer</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-2 px-2">
              <ArgentinaIcon />
              <p className="font-medium text-white">Argentina</p>
              <span className="text-blue-200 font-bold">|</span>
              <p className="font-medium text-white">Abril 2024 - Mayo 2024</p>
            </div>
            <div className="flex items-center gap-2 px-2">
              <Dot />
              <p className="font-medium text-white">Freelance</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <p className="text-zinc-200">He desarrollado este sitio web para Tualo, una empresa que se
                dedica al asesoramiento financiero. Esta Landing Page fue
                desarrollada con el fin de que la compañia pueda ofrecer sus
                servicios de una forma mas atractiva. <Modal
              title="Diarc Studio"
              description={
                <div className="mt-3 flex flex-col gap-4 text-zinc-300">
                  <p>
                    He desarrollado este sitio web para Diarc Studio, un estudio
                    de Outsourcing de Arte 3D enfocado en el desarrollo de
                    Experiencias Inmersivas, Metaversos y Gaming. Este sitio
                    cuenta con 4 secciones en donde se muestran distintos tipos
                    de información de la compañía. La sección Portfolio es donde
                    se muestran los proyectos de la compañía. Para esto integré
                    un sistema de administrador con tecnologías como Mongo DB
                    para almacenar los proyectos en la base de datos y
                    Cloudinary para el alojamiento de archivos multimedia. En
                    este se pueden agregar, editar y eliminar proyectos.
                  </p>

                  <div className="flex flex-col gap-5">
                    <p className="font-medium text-lg text-blue-200">
                      Mis mayores desafíos
                    </p>

                    <ul className="list-disc flex flex-col gap-4 px-2">
                      <li>
                        Llevar a cabo correctamente las idéas del cliente.
                      </li>
                      <li>
                        Realizar efectos y transiciones como el que se aprecia
                        en el Home.
                      </li>
                      <li>
                        Integrar un sistema CRUD para la administracion del
                        portfolio de la compañia.
                      </li>
                    </ul>
                  </div>
                </div>
              }
            /></p>
            
      
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1">
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

        <div className="w-[50%] h-[400px] max-2xl:h-[450px] rounded-3xl p-3 flex flex-col bgCardTma">
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
            <div className="flex items-center gap-2 px-2">
              <Dot />
              <p className="font-medium text-white">Frontend Developer</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <div className="flex items-center gap-2 px-2">
              <MexicoIcon />
              <p className="font-medium text-white">México</p>
              <span className="text-blue-200 font-bold">|</span>
              <p className="font-medium text-white">
                Noviembre 2023 - Marzo 2024
              </p>
            </div>
          </div>

          <div className="px-2 mt-5">
            <p className="text-zinc-200">
              He contribuido significativamente al desarrollo de una innovadora
              aplicación de servicio de paseo de perros, enfocándome en la
              creación de interfaces de usuario intuitivas y atractivas. <Modal
              title="Tu Mejor Amigo"
              description={
                <div className="mt-3 flex flex-col gap-4 text-zinc-300">
                  <p>
                    He contribuido significativamente al desarrollo de una
                    innovadora aplicación de servicio de paseo de perros,
                    enfocándome en la creación de interfaces de usuario
                    intuitivas y atractivas. Mi trabajo ha abarcado desde la
                    implementación de funcionalidades esenciales para la gestión
                    de datos, utilizando peticiones GET, POST, PUT y DELETE,
                    hasta asegurar una interacción fluida con la base de datos
                    de la aplicación.
                  </p>

                  <div className="flex flex-col gap-5">
                    <p className="font-medium text-lg text-blue-200">
                      Mis mayores desafíos
                    </p>

                    <ul className="list-disc flex flex-col gap-4 px-2">
                      <li>
                        Integrar un sistema de notificaciones efectivo mediante
                        React Native Firebase Cloud Messaging.
                      </li>
                      <li>
                        Incorporación de una funcionalidad que permitió a los
                        usuarios cargar imágenes de sus mascotas y tambien de
                        perfil a través de Cloudinary.
                      </li>
                      <li>
                        Gestionar el lanzamiento de la aplicación en Google Play
                        Console, asegurando que el servicio estuviera accesible
                        para los amantes de los perros buscando paseadores
                        confiables.
                      </li>
                    </ul>
                  </div>
                </div>
              }
            />
            </p>
          </div>


          <div className="flex flex-wrap items-center gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1">
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
      <CarouselCards />
    </div>
  );
};

export default Experience;
