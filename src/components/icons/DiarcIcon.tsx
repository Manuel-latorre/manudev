import Image from 'next/image'
import React from 'react'
import diarc from '../../images/diarc.png'

const DiarcIcon = ({className}:any) => {
  return (
    <Image src={diarc} alt='Tualo' className={className} width={50} height={50}/>
  )
}

export default DiarcIcon