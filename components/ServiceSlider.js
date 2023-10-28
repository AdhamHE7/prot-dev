//import swiper react component
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons Rx
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// icons io5
import {
  IoLogoReact,
  IoLogoJavascript,
} from "react-icons/io5";


//import require modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <IoLogoReact />,
    title: 'Web Development',
    description: '🌐 As a web developer, I thrive on turning ideas into functional, user-friendly websites. My skills in HTML, CSS, JavaScript, and various web frameworks allow me to create responsive and dynamic websites that not only look great but also perform seamlessly.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Graphics Designing',
    description: `✨ Graphic design is my canvas, and I paint with colors, shapes, and typography to tell stories and convey messages Whether it's creating captivating logos, eye-catching branding materials, or impactful marketing collateral, I'm committed to making every design a work of art.`,
  },
  {
    icon: <IoLogoJavascript />,
    title: 'Web Designing',
    description: '💻 My expertise in web design goes hand in hand with my development skills. I create visually appealing and functional websites that not only meet but exceed client expectations. From concept to execution, I ensure that every pixel is in its rightful place.',
  },
  {
    icon: <RxReader />,
    title: 'UI-UX Designing',
    description: '🎨 User experience and interface design are my passion. I believe that a well-crafted UI-UX can make or break a digital product. I use empathy and research to design interfaces that not only look stunning but also provide intuitive and enjoyable user experiences.',
  },
  {
    icon: <RxDesktop />,
    title: 'Video Editing',
    description: `🎬 When it comes to video editing, I'm a storyteller at heart. I have a keen eye for detail and a deep understanding of video production techniques. Whether it's editing promotional videos, documentaries, or cinematic masterpieces,
    I bring narratives to life through the magic of visual storytelling.`,
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints={{
      320: {
        slidesPerView: 1, // Corrected property name
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3, // Corrected property name
        spaceBetween: 15,
      },
    }}
    freeMode={true} // Corrected property name
    pagination={{
      clickable: true,
    }}
      modules={{ FreeMode, Pagination }}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gp-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,.15) transition-all duration-300]'>
              {/* icon */}
              <div className='text-4xl text-sky-600 mb-4'>{item.icon}</div>
              {/* tittle & desc */}
              <div className='mb-8'>
                <div className='mb-2 text-xl'>{item.title}</div>
                <p className='max-w-[360px] leading-normal'>{item.description}</p>
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-sky-600 transition-all duration-300' />
              </div>
              {/* <div className='flex relative right-40 bottom-4 sm:gp-x-0 left-4'>slideme</div> */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
