import React, { useState } from "react";

// icons
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from "react-icons/fa";

//icons
import {
    BsArrowRight,

} from 'react-icons/bs'

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeillustrator,
    SiTailwindcss,
    SiAdobeaftereffects,
} from "react-icons/si";


//  data of everything in the galley
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
                icons: [
                    <FaHtml5 key="IconType" />,
                    <FaCss3 key="IconType" />,
                    <FaJs key="IconType" />,
                    <FaReact key="IconType" />,
                    <SiNextdotjs key="IconTypet" />,
                    <SiFramer key="IconType" />,
                    <FaWordpress key="IconType" />,
                ],
            },
            {
                title: 'Graphics Design',
                icons: [
                <SiAdobeillustrator key="IconType" />,
                <SiAdobephotoshop key="IconType" />,],
            },
            {
                title: 'Web Design',
                icons: [<SiTailwindcss key="IconType" />,
                <FaCss3 key="IconType" />,],
            },
            {
                title: 'UI/UX Design',
                icons: [<FaFigma key="IconType" />,
                <SiAdobexd key="IconType" />,],
            },
            {
                title: 'Video Editing',
                icons: [<SiAdobepremierepro key="IconType" />,
                <SiAdobeaftereffects key="IconType" />,],
            },
        ],
    },
    {
        title: 'WEB DEVELOPER',
        info: [
            {
                title: '🌐 Web Development: As a web developer, I bring websites to life with clean code and dynamic functionality. My expertise includes HTML, CSS, JavaScript, and various frameworks, ensuring that your websites not only look fantastic but also perform flawlessly.',
                stage: '2023',
            },
        ],
    },
    {
        title: 'GRAPHICS DESIGNER',
        info: [
            {
                title: '🎨 Graphic Design: Graphic design is where I unleash my artistic flair. I specialize in creating visually stunning graphics that convey your message effectively. From logos and branding materials to marketing collateral, I turn ideas into captivating visuals.',
                stage: '2022',
            },
        ],
    },
    {
        title: 'WEB DESIGNER',
        info: [
            {
                title: '🌟 Web Design: My web design skills complement my development expertise. I design responsive, user-friendly websites that make a lasting impression. From concept to launch, I ensure that every aspect of your site is thoughtfully designed.',
                stage: '2023',
            },
        ],
    },
    {
        title: 'UI-UX DESIGNER',
        info: [
            {
                title: '🖌 UI-UX Design: User experience and interface design are my passion. I believe that user-centered design is at the heart of every successful digital product. I create intuitive interfaces that not only look beautiful but also enhance the overall user journey.',
                stage: '2022',
            },
        ],
    },
    {
        title: 'VIDEO EDITOR',
        info: [
            {
                title: `🎬 Video Editing: I'm a storyteller through and through. Video editing is my medium for crafting narratives that captivate and inspire. Whether it's editing promotional videos, documentaries, or cinematic content, I transform raw footage into compelling stories.`,
                stage: '2023',
            },
        ],
    },

     // Add key for other sections if necessary


    // {
    //   title: 'awards',
    //   info: [
    //     {
    //       title: 'Webby Awards - Honoree',
    //       stage: '2011 - 2012',
    //     },
    //     {
    //       title: 'Adobe Design Achievement Awards - Finalist',
    //       stage: '2009 - 2010',
    //     },
    //   ],
    // },
    // {
    //   title: 'experience',
    //   info: [
    //     {
    //       title: 'UX/UI Designer - XYZ Company',
    //       stage: '2012 - 2023',
    //     },
    //     {
    //       title: 'Web Developer - ABC Agency',
    //       stage: '2010 - 2012',
    //     },
    //     {
    //       title: 'Intern - DEF Corporation',
    //       stage: '2008 - 2010',
    //     },
    //   ],
    // },
    // {
    //   title: 'credentials',
    //   info: [
    //     {
    //       title: 'Web Development - ABC University, LA, CA',
    //       stage: '2011',
    //     },
    //     {
    //       title: 'Computer Science Diploma - AV Technical Institute',
    //       stage: '2009',
    //     },
    //     {
    //       title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
    //       stage: '2006',
    //     },
    //   ],
    // },
];

//components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

//framer morion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="h-full bg-primary py-32 text-center xl:text-left">
            <Circles />
            {/* avatar image */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                animate='show'
                exit='hidden'
                className='hidden xl:flex absolute bottom-0 -left-[23.125rem]'
            >
                <Avatar />
            </motion.div>
            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
                {/* text */}
                <div className="flex-l flex-col justify-center">
                    <div class="container mx-auto px-4 py-8">
                        <motion.h2
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            class="heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 hover:text-sky-500">About Us
                        </motion.h2>
                        <motion.p
                            variants={fadeIn('right', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            class="text-gray-400 mt-4">
                            🤝 Our Approach: Collaboration is our cornerstone. We thrive on open communication with our clients, valuing your insights as the driving force behind our projects. Your objectives become our mission, and your satisfaction is our ultimate goal.
                        </motion.p>
                        <motion.p
                            variants={fadeIn('right', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            class="text-gray-400 mt-4">
                            💡 Our Expertise: Our dynamic team boasts a diverse skill set that spans web development, graphic design, video editing, UI-UX design, and web design. We offer a comprehensive range of services to cater to your digital needs.
                        </motion.p>
                        <motion.p
                            variants={fadeIn('right', 0.4)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            class="text-gray-400 mt-4">
                            🌐 Our Philosophy: Creativity and functionality are our guiding principles. We craft digital experiences that captivate, engage, and inspire. Whether you&apos;re a startup with dreams, an established brand seeking a refresh, or an individual with a vision,
                            we are here to turn concepts into compelling realities.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('right', 0.2)}
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            className="relative flex-1 after:w-[]1px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                            {/* <button className="text-xl xl:text-2xl font-extrabold mb-2"> <a href="../../contact/index.js"> Lets <span className="text-sky-600">talk</span>
            </a></button> */}
                            <button className='btn text-xl xl:text-xl font-extrabold mb-2 rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-sky-600 group'>
                                <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s <span className="text-sky-600">talk</span></span>
                                <a href="contact">
                                    <BsArrowRight className='translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
                                </a>
                            </button>
                        </motion.div>
                    </div>
                    {/* counter */}
                    <div>
                        <div>
                            {/* video watch 1:35:00 its all about this counter */}
                        </div>
                    </div>
                </div>
                {/* info */}
                <motion.div variants={fadeIn('left', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className="flex flex-col w-full xl:max-w-[48%] h-[30rem]">
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:max-0 mb-4">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className={`${index === itemIndex &&
                                        'text-sky-600 after:w-[100%] after:bg-sky-600 after:transition-all after:duration-300'
                                        } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:bottom-0 after:left-0`
                                    }
                                    onClick={() => { setIndex(itemIndex) }}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-center">
                        {aboutData[index].info.map((item, itemIndex) => {
                            return (
                                <div
                                    key={itemIndex}
                                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                                >
                                    {/* title */}
                                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                                    <div className="hidden md:flex">-</div>
                                    <div>{item.stage}</div>
                                    <div className="flex gap-x-4">
                                        {/* icons */}
                                        {item.icons?.map((icon, itemIndex) => {
                                            return <div className="text-2xl text-white" key={itemIndex}>{icon}</div>;//remove key if not work
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
