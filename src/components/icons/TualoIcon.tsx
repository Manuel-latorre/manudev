import Image from 'next/image'
import React from 'react'
import tualo from '../../images/tualo.png'

const TualoIcon = ({className}:any) => {
  return (
    <Image src={tualo} alt='Tualo' className={className}/>
  )
}

export default TualoIcon