import {BallCanvas} from './canvas';
import {SectionWrapper} from '../hoc';
import {technologies} from '../constants';
import {motion} from 'framer-motion';
import { textVariant } from '../utils/motion';
import {styles} from '../styles';


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} cursor-pointer`}>Development Environments</p>
        <h2 className={`${styles.sectionHeadText} cursor-pointer`}>Languages</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")