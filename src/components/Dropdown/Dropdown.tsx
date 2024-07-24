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
import Link from "next/link";
import { LanguageIcon } from "@heroicons/react/24/outline";

const Dropdown: React.FC = () => {
  const { isEnglish, switchToEnglish, switchToSpanish } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <LanguageIcon width={25} height={25} className="text-white"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-indigo-800/70 border-none">
        <div className="flex flex-col gap-2">
        <button onClick={switchToSpanish} className={`language-button ${!isEnglish ? 'bg-indigo-600/70 rounded-lg' : ''} flex items-center gap-2 p-2 text-white text-xs`}>
            {/* <LanguagesIcon width={20} height={20}/> */}
            {isEnglish ? "Spanish" : "Español"}
        </button>
        <button onClick={switchToEnglish} className={`language-button ${isEnglish ? 'bg-indigo-600/70 rounded-lg' : ''} flex items-center gap-2 p-2 text-white text-xs`}>
            {/* <LanguagesIcon width={20} height={20}/> */}
            {isEnglish ? "English" : "Inglés"}
        </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;