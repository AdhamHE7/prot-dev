//components
import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className='h-full bg-primary py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
            variants={fadeIn('up', .3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            class="h2 xl:mt-8 sm:text-3xl md:text-4xl lg:text-5xl">Gallery <span className='text-sky-600'>.</span>
            </motion.h2>            
            <motion.p 
            variants={fadeIn('up', .3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            class="mb-4 max-w-[25rem] mx-auto lg:mx-0">
              🎨 Immerse yourself in the captivating world of art at ADHAM&#39;s Gallery. Our curated collection showcases a rich tapestry of creativity, where passion meets canvas, sculpture, and photography. Each piece tells a unique story, capturing the essence of human emotions, nature&#39;s beauty, and abstract concepts.
            </motion.p>            
          </div>
            {/* slider */}
          <motion.div variants={fadeIn('down', .6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
