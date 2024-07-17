"use client"

import React from 'react'
import Technology from './Technology'
import HtmlIcon from '../icons/HtmlIcon'
import CSSIcon from '../icons/CSSIcon'
import TailwindIcon from '../icons/TailwindIcon'
import ReactIcon from '../icons/ReactIcon'
import NextIcon from '../icons/NextIcon'
import NodeIcon from '../icons/NodeIcon'
import SupabaseIcon from '../icons/SupabaseIcon'
import MongoDbIcon from '../icons/MongoDbIcon'
import PostgreSQLIcon from '../icons/PostgreSQLIcon'
import JavascriptIcon from '../icons/JavascriptIcon'
import TypescriptIcon from '../icons/TypescriptIcon'
import ExpressIcon from '../icons/ExpressIcon'
import { StackMobile } from './StackMobile'
import { useLanguage } from '@/context/LanguageContext'

const Stack = () => {
    const {isEnglish} = useLanguage()
  return (
    <div id='#skills' className='lg:w-[70%] w-[90%] flex flex-col gap-4 my-32 h-auto mx-auto'>
        <p className='font-bold text-4xl mb-2 text-blue-200'>{isEnglish ? "Technologies" : "Tecnologías"}</p>
        <div className='flex flex-col justify-center gap-4 max-lg:hidden'>
            <div className='flex items-center gap-4 max-lg:flex-wrap'>
                <Technology icon={<HtmlIcon/>} name='HTML'/>
                <Technology icon={<CSSIcon/>} name='CSS'/>
                <Technology icon={<JavascriptIcon/>} name='Javascript'/>
                <Technology icon={<TypescriptIcon/>} name='Typescript'/>
            </div>
            <div className='flex items-center gap-4 max-lg:flex-wrap'>
                <Technology icon={<TailwindIcon/>} name='Tailwind css'/>
                <Technology icon={<ReactIcon/>} name='React'/>
                <Technology icon={<NextIcon/>} name='Next Js'/>
            </div>
            <div className='flex items-center gap-4 max-lg:flex-wrap'>
                <Technology icon={<NodeIcon/>} name='Node Js'/>
                <Technology icon={<ExpressIcon/>} name='Express'/>
                <Technology icon={<SupabaseIcon/>} name='Supabase'/>
                <Technology icon={<MongoDbIcon/>} name='MongoDB'/>
                <Technology icon={<PostgreSQLIcon/>} name='PostgreSQL'/>
            </div>
        </div>
        <div className='lg:hidden'>
            <StackMobile/>
        </div>
    </div>
  )
}

export default Stack