import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";


export default function ButtonsLanguages() {
    const [selectedButton, setSelectedButton] = useState("arg"); // Definir como "arg" inicialmente
    const { switchToEnglish, switchToSpanish } = useLanguage();


  const handleButtonClick = (buttonName:any) => {
    setSelectedButton(buttonName);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor:
            selectedButton === "arg" ? "gray" : "transparent",
        }}
        onClick={() => {handleButtonClick("arg"), switchToSpanish();}}
      >
            <p className="text-white">Spanish</p>
      </button>


      <button
        style={{
          backgroundColor:
          selectedButton === "usa" ? "gray" : "transparent",
        }}
        onClick={() => {handleButtonClick("usa"), switchToEnglish();}}
      >
            <p className="text-white">English</p>
      </button>
    </div>
  );
}