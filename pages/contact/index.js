//components
import Circles from '/components/circles';

//icons
import {
  BsArrowRight,

} from 'react-icons/bs'

//framer
import { motion } from 'framer-motion'

//variants
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
        {/* text & form  */}
        {/* <div class="container-g container mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
            <motion.h2 
            variants={fadeIn('up', .2)}
        initial='hidden'
        animate='show'
        exits='hidden'
        class="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Contact Us
            </motion.h2>
            <motion.p 
            variants={fadeIn('up', .2)}
        initial='hidden'
        animate='show'
        exits='hidden'
        class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 mb-4">
              🤝 Collaborative and adaptable, I thrive in fast-paced environments and relish the opportunity to work with diverse teams and clients. My goal is to turn your vision into reality while keeping an eye on the latest industry trends and technologies.
            </motion.p>
            <motion.p 
            variants={fadeIn('up', .2)}
        initial='hidden'
        animate='show'
        exits='hidden'
        class="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500">
              🚀 Let's embark on a journey of creativity and innovation together. Whether you need a website that stands out, a video that tells a compelling story, or a user-friendly interface that captivates your audience, I'm here to make it happen.
            </motion.p>
          </div> */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', .2)}
            initial='hidden'
            animate='show'
            exits='hidden'
            className='h2 text-center mb-12'>
            Contact <span className='text-sky-600'>Me.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn('up', .4)}
            initial='hidden'
            animate='show'
            exits='hidden'
            className='flex-l flex flex-col gap-6 w-full mx-auto' action="">
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type="text" placeholder='name' className='input' />
              <input type="text" placeholder='email' className='input' />
            </div>
            <input type="text" placeholder='subject' className='input' />
            <textarea name="message" placeholder='message' className='textarea'></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-sky-600 group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&#39;s talk</span>
              <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
        <div className=''>
        </div>
      </div>
    </div>
  );
};

export default Contact;
