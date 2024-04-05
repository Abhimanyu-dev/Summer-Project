"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import mails from '@utils/database.json'
import {useInView} from 'react-intersection-observer'
import Image from 'next/image'
import {motion} from 'framer-motion'

let index = 20

const Feed = () => {
  const router = useRouter()
  const {ref, inView} = useInView()
  const [data, setData] = useState([])
  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1}
  }

  useEffect(() => {
    if(inView){
      const elements = []
      for(let i = 0; i < index; i++){
        let mail = mails.filter(e => e.index === i)
        let element = <motion.div
        className='glassmorphism w-full flex-between'
        variants={variants}
        initial='hidden'
        animate='visible'
        transition={
          {
            delay:i*0.08,
            ease: 'easeInOut',
            duration: 0.5
          }
        }
        viewport={{amount:0}}
        onClick={() => {router.push(`/mail/${mail[0]["_id"]}`)}}
        >
          <div className="sender_text">{mail[0]["sender"].split('@')[0]}</div>
          <div className="w-[85%] flex-start">
            <div className="subject_text">{mail[0]["subject"]}</div>
            <div className="pt-1 truncate ml-2 text-center h-[28px] align-bottom">{mail[0]["body"]}</div>
          </div>
        </motion.div>
        elements.push(element)
      }
      setData([...data, ...elements])
      index += 5
    }
  }, [inView])
  return (
    <div className='w-full'>
      {data}
      <section className="flex justify-center items-center w-full mt-6">      
        <div ref={ref}>
          <Image
            src="./assets/spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  )
}

export default Feed