import Dot from '@/components/Dot/Dot'
import TmaIcon from '@/components/icons/TmaIcon'
import { CalendarIcon, MapPinIcon, MaximizeIcon, SquareArrowOutUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MarqueeDiarc } from '../MarqueeStack/MarqueeDiarc'
import { MarqueeTma } from '../MarqueeStack/MarqueeTma'
import GtIcon from '@/components/icons/GtIcon'
import { MarqueeGt } from '../MarqueeStack/MarqueeGt'

const CardGt = () => {
  return (
    <div className='w-[33.3%] h-auto rounded-xl p-3 cardExp'>
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
                <div className='flex items-center gap-2 flex-wrap mt-4'>
                    <div className='flex items-center gap-2 rounded-full nav px-2 justify-center'>
                        <Dot/>
                        <p className='text-blue-200 font-medium text-sm'>Freelance</p>
                    </div>
                    <div className='flex items-center gap-2 rounded-full nav px-2 justify-center'>
                        <p className='text-blue-200 text-sm font-medium'>Septiembre 2023</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 mt-10 flex-col'>
                    <div className='w-full'>
                        <Link href={""} className='flex items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav'>
                            Visitar
                            <SquareArrowOutUpRightIcon width={18} height={18}/>
                        </Link>
                    </div>
                    <div className='w-full'>
                        <Link href={""} className='flex items-center gap-2 rounded-xl p-2 justify-center text-[#f0f0f0] hover:bg-slate-400/10 transition-all nav'>
                            Acerca del puesto
                            <MaximizeIcon width={18} height={18}/>
                        </Link>
                    </div>
                </div>
                <div className='mt-8'>
                    <MarqueeGt/>
                </div>
            </div>
  )
}

export default CardGt