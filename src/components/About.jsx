import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({index, title, icon}) => {
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
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] 
          flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Easy Media Agency</p>
        <h2 className={styles.sectionHeadText}>Bemutatkozás.</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Weboldal készítéssel és üzemeltetéssel foglalkozunk. 
        Ebbe beletartozik a tervezés, kivitelezés, publikálás és weboptimalizáció is.
        Legfőbb célunk, hogy olyan honlapot hozzunk létre, ami igényes, jól működő és praktikus. 
        Különleges kéréseknek is szívesen eleged teszünk természetesen, mivel nálunk 
        az ügyfél az első. <br/> Shopify webshop tervezésben is otthon vagyunk. Az online vezetett raktárkészlet a termékekről, 
        a fizetési rendszer és a termékek felvitele a rendszerbe is a mi gondunk, neked csak a jó termékeket kell megtalálnod.
        <br/>Legyen szó étteremről, manufaktúráról, termék vagy szolgáltatás értékesítésről, mi biztosan kihozzuk a maximumot a honlapodból! 
        

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index}  {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")