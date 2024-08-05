import { HERO_CONTENT } from '../constants';
import profilePicAzaam from '../assets/about1.jpeg';
import { motion } from 'framer-motion';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
            >
              Azaam Ahmed
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'
            >
              {/* Add text content if needed */}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light tracking-tighter'
            >
              {HERO_CONTENT}
            </motion.p>
            {/* Download CV Button */}
            <a
              href='/AHMED_MAA.pdf' 
              download='AHMED_MAA.pdf' 
              className='mt-6 inline-block rounded-lg bg-blue-900 px-6 py-2.5 text-white font-semibold text-lg shadow-md hover:bg-blue-600'
            >
              Download My CV
            </a>
          </div>
        </div>
        <div className='w-full lg:w-1/4 lg:p-10'>
          <div className='flex justify-center'>
            <motion.img
              className="mx-14 w-13 h-18 rounded-[20px]" 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePicAzaam}
              alt='azaamProfile'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
