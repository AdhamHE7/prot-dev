// testimonial data
export const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      `Adham you're Awesome. He's Service is magnificent. Highly recommended.`,
  },
  {
    image: '/profile-pic/ali-morshedlou.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'A graphics designer with an unparalleled eye for detail. Their designs are masterpieces in every sense',
  },
  {
    image: '/profile-pic/brooke-cagle.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'Great service to get. Very communicatative and helpful fella. Reasonable pricing and top notch output. Recommended.',
  },
  {
    image: '/profile-pic/christina-wocintechchat.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      `A top-tier web developer who sculpted a website beyond my wildest dreams. I can't praise their skills enough – exceptional, intuitive, and a true professional!`,
  },
  {
    image: '/profile-pic/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'This graphics designer is a creative sorcerer. They took my concepts and breathed life into visuals that left me awestruck. Absolutely brilliant work!',
  },
  {
    image: '/profile-pic/amy-hirschi.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'Web design at its finest! The site they designed is sleek, engaging, and effortlessly navigable. A true expert in the field.',
  },
  {
    image: '/profile-pic/austin-distel.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      `Exceptional web developer! Created a stunning site that surpassed all expectations. Can't recommend them enough!`,
  },
  {
    image: '/profile-pic/dragos-gontariu.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'A UI-UX designer of unmatched prowess. They transformed our site, making it a visual marvel while enhancing user experience. Simply outstanding!',
  },
  {
    image: '/profile-pic/edward-cisneros.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'Video editing elevated to an art form. Every project they touch becomes a masterpiece. A true virtuoso in the realm of film editing.',
  },
  {
    image: '/profile-pic/foto-sushink.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      `A hidden gem among portfolios. This talent elevates websites to pure art. Their work is nothing short of astonishing.`,
  },
  {
    image: '/profile-pic/uijak-Sushi.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      `This web developer possesses boundless skills. Witnessing their work is like seeing magic unfold before your eyes.`,
  },
  {
    image: '/profile-pic/jake-nackos.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      `A graphics designer with divine talent. My vision came to life through their remarkable designs. A true maestro of the digital canvas.`,
  },
  {
    image: '/profile-pic/jurica-koletic.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'A web designer par excellence! My website has transformed into an immersive journey, thanks to their incredible talent.',
  },
  {
    image: '/profile-pic/ryan-hoffman.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'A UI-UX visionary. Their designs set new standards for user experience, making every interaction a pleasure.',
  },
  {
    image: '/profile-pic/stephanie-liverani.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'Video editing at its best! A true artist with the ability to convey compelling stories through film, leaving a lasting impact.',
  },
  {
    image: '/profile-pic/taylor.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'This portfolio showcases the work of a web developer with an extraordinary touch. A true master of their craft',
  },
  {
    image: '/profile-pic/the-connected-narrative-N8lRH2uxih4-unsplash.jpg.jpg',
    name: 'Ali Morshedlou',
    position: 'Food Bloger',
    message:
      'A graphics designer with an unparalleled eye for detail. Their designs are masterpieces in every sense',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

//import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import require modules
import { Navigation, Pagination } from 'swiper';

// icons io5
import {
  FaQuoteLeft,
  FaQuoteRight
} from "react-icons/fa";

//next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={{ Navigation, Pagination }}
      className='h-[400px]'
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name, position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/* avatar */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt='person profice' />
                  </div>
                  {/* name */}
                  <div className='text-lg'>
                    {person.name}
                  </div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* q icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                <FaQuoteRight className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

