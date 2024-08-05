import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiPython } from 'react-icons/si';
import { SiAngular } from 'react-icons/si';
import { SiFigma } from 'react-icons/si'; 
import { SiFirebase } from 'react-icons/si';
import { SiKotlin } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiVuedotjs } from 'react-icons/si';
import { SiPhp } from 'react-icons/si';
import { FaWordpress } from 'react-icons/fa';

import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        {/* Existing Icons */}
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-6xl text-cyan-400' />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <TbBrandNextjs className='text-6xl text-purple-400' />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMongodb className='text-6xl text-green-500' />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiJavascript1 className='text-6xl text-yellow-300' />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaNodeJs className='text-6xl text-green-500' />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <BiLogoPostgresql className='text-6xl text-sky-700' />
        </motion.div>

        {/* New Icons */}
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiPython className='text-6xl text-blue-500' />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiAngular className='text-6xl text-red-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiFigma className='text-6xl text-purple-500' />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaWordpress className='text-7xl text-blue-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiFirebase className='text-6xl text-orange-400' />
        </motion.div>

        <motion.div
          variants={iconVariants(4.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiKotlin className='text-6xl text-blue-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiGit className='text-6xl text-orange-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(5.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMysql className='text-6xl text-blue-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiPostman className='text-6xl text-red-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(6.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiHtml5 className='text-6xl text-orange-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(7)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiCss3 className='text-6xl text-blue-500' />
        </motion.div>

        <motion.div
          variants={iconVariants(7.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiPhp className='text-6xl text-blue-700' />
        </motion.div>

        <motion.div
          variants={iconVariants(8)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiTypescript className='text-6xl text-blue-600' />
        </motion.div>

        <motion.div
          variants={iconVariants(8.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiVuedotjs className='text-6xl text-green-500' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
