import React from 'react'
import { FaEnvelopeOpen } from 'react-icons/fa'
import {FaEnvelopeOpenText,FaRocket} from "react-icons/fa6"

const NewsLetter = () => {
  return (
    <div>
      <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText/>
                Email me for jobs</h3>
                <p className='text-primary/75 text-base mb-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                
                
      </div>
      <div className='mt-20'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaRocket/>
                Get noticed faster</h3>
                <p className='text-primary/75 text-base mb-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
               
                
      </div>
    </div>
  )
}

export default NewsLetter
