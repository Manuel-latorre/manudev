import { TerminalIcon, ToggleRightIcon } from "lucide-react";import Link from "next/link";
import React from "react";
import RedirectProjectIcon from "../icons/RedirectProjectIcon";
import TypescriptIcon from "../icons/TypescriptIcon";
import NextIcon from "../icons/NextIcon";
import TailwindIcon from "../icons/TailwindIcon";
import Modal from "../Experience/Modal";
import Image from "next/image";
import NodeIcon from "../icons/NodeIcon";
import techshop from "../../images/techshop.png";
import TechShopIcon from "../icons/TechShopIcon";
import ExpressIcon from "../icons/ExpressIcon";
import MongoDbIcon from "../icons/MongoDbIcon";
import '../../app/globals.css'
import GithubIcon from "../icons/GithubIcon";

const Projects = () => {
  return (
    <div className="lg:w-[70%] w-[90%] flex flex-col gap-3 mx-auto mt-32">
      <div className="flex items-center gap-1 text-blue-200">
        <TerminalIcon width={35} height={35} />
        <p className="font-semibold text-2xl">Proyectos</p>
      </div>

      <div className="flex items-center gap-3 w-full">
        <div className="w-[50%] h-[450px] max-2xl:h-[450px] max-md:w-full rounded-3xl p-3 flex flex-col bgCardTechShop">
          <div className="bgText p-2 rounded-xl flex items-center justify-between">
            <div className=" flex items-center gap-2">
              <TechShopIcon/>
              <p className="text-white font-medium text-xl">Tech Shop API</p>
            </div>
          </div>

          <div className="px-2 mt-5">
            <p className="text-zinc-200">
              Tech Shop API Database es un sitio web que ofrece una API REST
              para gestionar productos tecnológicos como auriculares, teclados y
              consolas. La API permite realizar operaciones CRUD (Crear, Leer,
              Actualizar, Eliminar) sobre tres modelos principales.{""}
              <Modal
                title="Tech Shop API"
                description={
                  <div className="mt-3 flex flex-col gap-4 text-zinc-300">
                    <p>
                      Tech Shop API Database es un sitio web que ofrece una API
                      REST para gestionar productos tecnológicos como
                      auriculares, teclados y consolas. La API permite realizar
                      operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre
                      tres modelos principales: Productos: Representa los
                      artículos disponibles en la tienda, con propiedades como
                      nombre, descripción, precio y categoría. <br /> <br />Carrito:
                      Administra los productos que los usuarios agregan a sus
                      carritos de compras, incluyendo el ID del usuario, lista
                      de productos y cantidad de cada producto. <br /> <br />Usuarios:
                      Gestiona la información de los usuarios, con propiedades
                      como nombre, correo electrónico y contraseña. <br /> <br />El backend
                      está desarrollado con Express y utiliza MongoDB para el
                      almacenamiento de datos. La sección de documentación
                      (Docs) proporciona toda la información necesaria para
                      consumir la API.
                    </p>
                  </div>
                }
              />
            </p>
          </div>

          <div className="flex flex-col gap-4 my-10">
            <Link
              href={""}
              className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[100px] justify-center"
            >
              Visitar
              <RedirectProjectIcon />
            </Link>
            <Link
              href={""}
              className="flex items-center gap-2 bgText hover:bg-zinc-700/5 rounded-lg text-zinc-200 p-2 w-[160px] justify-center"
            >
              Repositorio
              <GithubIcon />
            </Link>
          </div>

          <div className="flex items-center flex-wrap gap-2 mt-3 text-zinc-300 bottom-2 absolute px-1">
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
              <ExpressIcon />
              <p>Express</p>
            </div>
            <div className="bgText flex items-center gap-2 px-2 py-1 rounded-2xl">
              <MongoDbIcon/>
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
