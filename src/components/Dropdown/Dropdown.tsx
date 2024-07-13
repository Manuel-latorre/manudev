"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ConfigIcon from "../icons/ConfigIcon";
import { useLanguage } from "@/context/LanguageContext";
import '../../app/globals.css'
import { LanguagesIcon } from "lucide-react";

const Dropdown: React.FC = () => {
  const { isEnglish, switchToEnglish, switchToSpanish } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <ConfigIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-zinc-800 border-none">
        <div className="flex flex-col gap-2">
        <button onClick={switchToSpanish} className={`language-button ${!isEnglish ? 'bg-zinc-600 rounded-lg' : ''} flex items-center gap-2 p-2 text-white text-xs`}>
            {/* <LanguagesIcon width={20} height={20}/> */}
            {isEnglish ? "Spanish" : "Español"}
        </button>
        <button onClick={switchToEnglish} className={`language-button ${isEnglish ? 'bg-zinc-600 rounded-lg' : ''} flex items-center gap-2 p-2 text-white text-xs`}>
            {/* <LanguagesIcon width={20} height={20}/> */}
            {isEnglish ? "English" : "Inglés"}
        </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;