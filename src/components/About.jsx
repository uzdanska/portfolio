import React from 'react'
import {Tilt} from "react-tilt";
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard =({index, title, icon}) =>{
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45, 
            scale: 1, 
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py- px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center cursor-pointer">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} cursor-pointer`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} cursor-pointer`}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in Python and JavaScirpt. I worked with frameworks like Django, React, Node.js and Three.js. I love learning about Data Science, Artificial Inteligence and web development. I'm a quick learner and collaborate closely with clients to create efficient, scalable and user-friendly solutions that solve real problems.
      </motion.p>
      <motion.p
       variants={fadeIn("", "", 0.1, 1)}
       className='mt-4 text-[#c03680] text-[19px] font-extrabold text- max-w-3xl leading-[30px]'>
        Let's work together to bring you ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")