import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { factions } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const FactionCard  = ({ index, title, icon}) => 
  {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className='w-full red-blue-gradient p-[1px] rounded-[20px] shadow-card'>
            <div
              options = {{
                max: 45,
                scale: 1,
                speed: 450
              }}
              className="bg-tertiary rounded-[20px]
              py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >
              
              <img 
                src={icon} 
                alt={title} 
                className="w-16 h-16 object-contain" />
              <h3 className="text-white text-[20px] font-bold text-center"> {title} </h3>
            </div>
        </motion.div>
      </Tilt>
    )
  }

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className= {styles.sectionSubText}> Gundam Factions </p>
        <h2 className= {styles.sectionHeadText}> Overview </h2>
      </motion.div>

      <motion.p 
        varaiants = {fadeIn("", "", 0.1, 1)}
        className = "mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]">
          The different factions in the gundam franchise 
      </motion.p>
      
      <div className="mt-20 flex flex-wrap gap-10">
        {factions.map((factions, index) => (
          <FactionCard key={factions.title} index = 
          {index} {...factions} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "factions")