"use client";


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../app/globals.css'
import { useLanguage } from '@/context/LanguageContext';
import { ChatBubbleLeftIcon, EnvelopeIcon, EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import { toast } from "sonner";

type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};

const Form: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const {isEnglish} = useLanguage()



  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        "service_air3w4q",
        "template_dbcsors",
        form.current,
        "_CdUnxT0WVgK2pTat"
      )
      .then((result) => {
        console.log(result.text);
        toast.success(isEnglish ? "Thanks for communicating with me! I will be replying to your message soon" : "¡Gracias por comunicarte conmigo! Pronto estaré respondiendo tu mensaje")
      })
      .catch((error) => {
        console.error(error.text);
      });
    }
  }

  return (
    <form ref={form} onSubmit={sendEmail} className='lg:w-[50%] w-[90%] mx-auto flex flex-col gap-6'>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="user_email" className='text-white ml-2 flex items-center gap-2'> <EnvelopeIcon width={18} height={28}/> Email</label>
        <input placeholder='example@gmail.com' type="text" name="user_email" id="user_email" className='nav text-white p-2 rounded-xl shadow-lg border-none'/>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label htmlFor="message" className='text-white ml-2 flex items-center gap-2'><ChatBubbleLeftIcon width={18} height={28}/>{isEnglish ? "Message" : "Mensaje"}</label>
        <textarea placeholder={isEnglish ? "Hi Manuel!..." : "¡Hola Manuel!..."} name="message" id="message" className='nav text-white p-2 rounded-xl shadow-lg border-none'/>
      </div>
      <input type="submit" id="button" value={isEnglish ? "Send" : "Enviar"} className='cursor-pointer w-[50%] mx-auto p-2 rounded-xl bg-indigo-600/40 text-white font-meidum'/>
    </form>
  );
};

export default Form;