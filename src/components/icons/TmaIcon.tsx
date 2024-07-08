import React from 'react'
import Image from 'next/image'
import tma from '../../images/tma.png'


const TmaIcon = ({className}:any) => {
  return (
    <Image src={tma} alt='tma' className={`bg-[#827AB6] rounded-md ${className}`} width={50} height={50}/>

  )
}

export default TmaIcon