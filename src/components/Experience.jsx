import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl'
      >
        Certificates
      </motion.h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={experience} className='mb-20 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>
                        
            <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: 100 }}
  transition={{ duration: 1 }}
  className='w-full max-w-xl lg:w-3/4'
>
  <h6 className='mb-2 text-base font-semibold'>
    {experience.certificateName} -{' '}
    <span className='text-xs text-purple-100'>{experience.provider}</span>
  </h6>
  <p className='mb-4 text-sm text-neutral-400'>Year: {experience.year}</p>
  <a
    href={experience.link}
    target="_blank"
    rel="noopener noreferrer"
    className='text-sm text-blue-500 underline'
  >
    View Certificate
  </a>
  <div className='mt-4'>
    {experience.technologies.map((tech, techIndex) => (
      <span
        key={techIndex}
        className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-800'
      >
        {tech}
      </span>
    ))}
  </div>
</motion.div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
