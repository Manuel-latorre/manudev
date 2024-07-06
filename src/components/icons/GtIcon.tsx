import React from 'react'
import Image from 'next/image'
import gt from '../../images/gt.png'


const GtIcon = ({className}:any) => {
  return (
    <Image src={gt} alt='gt' className={className}/>

  )
}

export default GtIcon