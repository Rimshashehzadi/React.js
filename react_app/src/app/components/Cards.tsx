import Image from 'next/image'
import React from 'react'
import img from '../../../public/images/fm.jpg'

const Cards = () => {
  return (
    <>
    <div>
<Image src={img} alt='image' width={200} height={200}/>
<h3>Nature 1 Image</h3>
    </div>
    </>
  )
}

export default Cards