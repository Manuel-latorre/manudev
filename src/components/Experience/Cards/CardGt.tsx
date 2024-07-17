"use client"

import Dot from '@/components/Dot/Dot'
import TmaIcon from '@/components/icons/TmaIcon'
import { CalendarIcon, MapPinIcon, MaximizeIcon, SquareArrowOutUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MarqueeDiarc } from '../MarqueeStack/MarqueeDiarc'
import { MarqueeTma } from '../MarqueeStack/MarqueeTma'
import GtIcon from '@/components/icons/GtIcon'
import { MarqueeGt } from '../MarqueeStack/MarqueeGt'
import Modal from '../Modal'
import TypescriptIcon from '@/components/icons/TypescriptIcon'
import NextIcon from '@/components/icons/NextIcon'
import CSSIcon from '@/components/icons/CSSIcon'
import '../../../app/globals.css'
import { useLanguage } from '@/context/LanguageContext'

const CardGt = () => {
  
  const {isEnglish} = useLanguage()

  return (
    <div className='w-[33.3%] max-lg:w-full h-auto rounded-xl p-3 cardExp'>
                <div className='flex items-center gap-3'>
                    <GtIcon/>
                    <div>
                        <p className='text-2xl font-semibold text-blue-200'>Generación Tech</p>
                        <div className='flex items-center gap-1 text-black px-2 rounded-full bg-white mt-1 w-min'>
                            <MapPinIcon width={12} height={12}/>
                            <p className='text-xs font-medium'>Argentina</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2 mt-4'>
                    <div className='flex items-center gap-2 rounded-full nav px-2 justify-center'>
                        <Dot/>
                        <p className='text-blue-200 font-medium text-sm'>Freelance</p>
                    </div>
                    <div className='flex items-center gap-2 rounded-full nav px-2 justify-center'>
                        <p className='text-blue-200 text-sm font-medium'>{isEnglish ? "September 2023" : "Septiembre 2023"}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-10 flex-col'>
                    <div className='w-full'>
                        <Link href={"https://www.generaciontech.com.ar/"} className='flex items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav'>
                            {isEnglish ? "Visit" :"Visitar"}
                            <SquareArrowOutUpRightIcon width={18} height={18}/>
                        </Link>
                    </div>
                    <div className='w-full'>
                    <Modal
            description={
              <div className="flex flex-col gap-2 text-blue-200">
                <div className="flex items-center gap-3">
                  <GtIcon/>
                  <div>
                    <p className="text-2xl font-semibold text-blue-200">
                      Generación Tech
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
                      {isEnglish ? "September 2023" : "Septiembre 2023"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-5 text-base">
                    <p>
                        {isEnglish ? "I have developed this website for Generación Tech, a digital marketing agency." : "He desarrollado este sitio web para Generación Tech, Una agencia de Marketing digital."}
                    </p>
                  <p className="text-xl text-[#f0f0f0] font-semibold">
                    {isEnglish ? "Technologies used" :"Tecnologías utilizadas"}
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
                  </div>
                </div>
              </div>
            }
          />
                    </div>
                </div>
                <div className='mt-8 borderBlur'>
                    <MarqueeGt/>
                </div>
            </div>
  )
}

export default CardGt