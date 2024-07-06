import Image from 'next/image'
import React from 'react'
import diarc from '../../images/diarc.png'

const DiarcIcon = ({className}:any) => {
  return (
    <Image src={diarc} alt='Tualo' className={className}/>
  )
}

export default DiarcIcon