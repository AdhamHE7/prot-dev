//components
import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Testimonials = () => {
  return (
    <div className="h-full bg-primary py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* title */}
        <motion.h2 
        variants={fadeIn('up', .2)}
        initial='hidden'
        animate='show'
        exits='hidden'
        class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          I&#39;m available for your work <span class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-sky-600">24/7</span>
        </motion.h2>
        {/* description */}
        <motion.p 
        variants={fadeIn('down', .2)}
        initial='hidden'
        animate='show'
        exits='hidden'
        class="mt-4 text-l sm:text-lg lg:text-xl xl:text-2xl mb-16">
          &quot;Choose me for your project, and you&#39;re choosing a seasoned professional who&#39;s passionate, creative, and dedicated. I bring a unique blend of skills and expertise to every job, ensuring your vision is not only realized but elevated. Let&#39;s transform your
          ideas into captivating reality.&quot;</motion.p>
        {/* title */}
        <motion.h2 
        variants={fadeIn('up', .2)}
        initial='hidden'
        animate='show'
        exits='hidden'
        className="h2 mb-8 xl:mb-0">
          FEEDBACK <span className="text-sky-600">.</span>
        </motion.h2>
        {/* slide */}
        <motion.div
        variants={fadeIn('up', .4)}
        initial='hidden'
        animate='show'
        exits='hidden'>
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
