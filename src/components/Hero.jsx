import {motion}  from 'framer-motion';

import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c03680]"></div>
          <div className="w-1 sm:h-80 h-40 pink-gradient"></div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-[#c03680]">Ula</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {/* I'm a software developer and piano<br className='sm:block hidden'/> player based in Poland. <br className='sm:block hidden'/> I am interested in full-stack development, <br className='sm:block hidden'/>artificial intelligence, data science<br className='sm:block hidden'/> and most IT areas. */}
            I develop 3D visuals, user  <br className='sm:block hidden'/> interfaces, web and console application.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
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