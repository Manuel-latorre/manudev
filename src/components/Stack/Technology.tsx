import React from 'react'
import Meteors from '../magicui/meteors';

interface Props{
    name:string;
    icon: JSX.Element;
}

const Technology = ({name, icon}:Props) => {

  return (
    <div className='relative flex overflow-hidden navflex items-center justify-center text-lg gap-2 text-[#f0f0f0] font-medium p-6 rounded-lg nav w-full xl:hover:scale-x-95 transition-all'>
        <Meteors number={30}  />
        {icon}
        {name}
    </div>
  )
}

export default Technology

{/* <div className="relative flex justify-center w-full h-[50%] rounded-xl overflow-hidden nav">
            <Meteors number={30} />
            <button className="flex items-center justify-center gap-2 p-2 rounded-xl text-[#f0f0f0] w-full">
              <SquareArrowOutUpRightIcon width={20} height={20} />
              Abrir CV
            </button>
          </div> */}