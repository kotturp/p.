"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[9px] px-[9px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[20px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
          Never miss a task, deadline or idea
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[60px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-500 py-20">
            Skills
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-white-300 mb-10 mt-[10px] text-left'
        >
        </motion.div>
    </div>
  )
}

export default SkillText