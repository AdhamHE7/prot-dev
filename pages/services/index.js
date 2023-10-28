//components
import ServicesSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

//framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
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
            class="h2 sm:text-3xl md:text-4xl lg:text-5xl">My <span className='text-sky-600'>services.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            class="text-l mt-2 text-blue-50">Quality services to meet your needs.
            </motion.p>            
            <motion.p 
            variants={fadeIn('up', .3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            class="mb-2 max-w-[25rem] mx-auto lg:mx-0">
              🚀 Explore my portfolio to see examples of my work and get in touch to discuss how I can tailor my services to meet your specific needs.
            </motion.p>
            <motion.p 
            variants={fadeIn('up', .3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            class="mb-2 max-w-[25rem] mx-auto lg:mx-0">
              🤝Feel free to adapt and expand upon these service descriptions to provide more details or to better align with your specific offerings and expertise.
            </motion.p>
            <motion.p 
            variants={fadeIn('up', .3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            class="mb-2 max-w-[25rem] mx-auto lg:mx-0">
              🌟 I offer a comprehensive range of creative and technical services to meet your digital needs. With a passion for excellence and a commitment to delivering outstanding results, I provide the following services:
            </motion.p>
          </div>
            {/* slider */}
          <motion.div variants={fadeIn('down', .6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
            <ServicesSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
