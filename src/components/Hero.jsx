import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles'
import { GundamCanvas  } from './canvas';

// References:
// 3D Models
// https://sketchfab.com/search?features=downloadable&licenses=72eb2b1960364637901eacce19283624&q=tag%3Agundam&sort_by=-likeCount&type=models

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7x1 mx-auto ${styles.paddingX} flex flex-row
        items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#fb2f38]" />
            <div className="w-1 sm:h-80 h-40 candyapple-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}> What is <span
              className="text-[#2c52b3]"> Gundam? </span></h1> 
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Gundam is a Japanese military science fiction media franchise. The franchise features giant robots, or mecha. <br 
              className="sm:block hidden"/>
              Created by Yoshiyuki Tomino and Sunrise 
            </p>
          </div>
        </div>

        <GundamCanvas />

        <div className="absolute xs:bottom-0 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px]
              rounded-3x1 border-4 border-secondary flex justify-center items-start p-2">
                <motion.dev
                  animate={{
                    y: [0, 24, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}

                  className="w-3 h-3 rounded-full bg-secondary mb-1"
                />
              </div>
          </a>
        </div>
    </section>
  )
}

export default Hero