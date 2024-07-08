import Dot from '@/components/Dot/Dot'
import TualoIcon from '@/components/icons/TualoIcon'
import { MapPinIcon, MaximizeIcon, SquareArrowOutUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MarqueeStack } from '../MarqueeStack'
import DiarcIcon from '@/components/icons/DiarcIcon'
import { MarqueeDiarc } from '../MarqueeStack/MarqueeDiarc'

const CardDiarc = () => {
  return (
    <div className='w-[50%] h-auto rounded-xl p-3 cardExp'>
              
                <div className='flex items-center gap-3'>
                    <DiarcIcon/>
                    <div>
                        <p className='text-2xl font-semibold text-blue-200'>Diarc Studio</p>
                        <div className='flex items-center gap-1 text-black px-2 rounded-full bg-white mt-1 w-min'>
                            <MapPinIcon width={12} height={12}/>
                            <p className='text-xs font-medium'>Argentina</p>
                        </div>
                    </div>
                </div>
              
                <div className='flex items-center gap-2 flex-wrap mt-4'>
                    <div className='flex items-center gap-2 rounded-full nav w-min px-2 justify-center'>
                        <Dot/>
                        <p className='text-blue-200 font-medium text-sm'>Freelance</p>
                    </div>
                    <div className='flex items-center gap-2 rounded-full nav px-2 justify-center'>
                        <p className='text-blue-200 text-sm font-medium'>Abril - Mayo 2024</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-10 max-lg:flex-col'>
                    <div className='lg:w-[50%] w-full'>
                        <Link href={""} className='flex items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav'>
                            Visitar
                            <SquareArrowOutUpRightIcon width={18} height={18}/>
                        </Link>
                    </div>
                    <div className='lg:w-[50%] w-full'>
                        <Link href={""} className='flex items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav'>
                            Acerca del puesto
                            <MaximizeIcon width={18} height={18}/>
                        </Link>
                    </div>
                </div>
                <div className='mt-8'>
                    <MarqueeDiarc/>
                </div>
            </div>
  )
}

export default CardDiarc