import React from "react";
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

const Experience = () => {
  return (
    <div className="lg:w-[70%] w-[90%] mx-auto flex flex-col gap-4 mt-32">
      <div className="w-full flex items-center gap-4">
        <CardTaulo />
        <CardDiarc />
      </div>
      <div className="w-full flex items-center gap-4">
        <CardTma />
        <CardGt />
        <div className="w-[33.3%] h-[320px] flex flex-col gap-4">
          <div className="relative flex justify-center w-full h-[50%] rounded-xl overflow-hidden nav">
            <Meteors number={30} />
            <button className="flex items-center justify-center gap-2 p-2 rounded-xl text-[#f0f0f0] w-full">
              <DownloadIcon width={20} height={20} />
              Descargar CV
            </button>
          </div>

          <div className="relative flex justify-center w-full h-[50%] rounded-xl overflow-hidden nav">
            <Meteors number={30} />
            <button className="flex items-center justify-center gap-2 p-2 rounded-xl text-[#f0f0f0] w-full">
              <SquareArrowOutUpRightIcon width={20} height={20} />
              Abrir CV
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
