import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpeg";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
  <h1 className="my-20 text-center text-4xl">
    About <span className="text-neutral-500">Me</span>
  </h1>
  <div className="flex flex-wrap">
    <div className="w-full lg:w-1/2 lg:p-8">
      <div className="flex items-center justify-center">
        <img
          className="rounded-2xl h-[32rem] w-auto object-cover"
          src={aboutImg}
          alt="about"
        />
      </div>
    </div>
    <div className="w-full lg:w-1/2">
      <div className="flex justify-center lg:justify-start">
        <p className="my-2 max-w-xl py-6 text-neutral-300 leading-relaxed">
          - <strong>Name:</strong> Azaam Ahmed<br />
          - <strong>Location:</strong> Colombo<br />
          - <strong>Current Studies:</strong> Bachelor of IT specializing in IT at SLIIT University<br />
          - <strong>Passion:</strong> Full-stack developer with hands-on experience in building robust and scalable web applications<br />
          Also I am passionate about data science, continually exploring new methods and technologies to unlock actionable insights from complex data sets <br />
          - <strong>Skills:</strong><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Front-end Technologies: React, Next.js<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Back-end Technologies: Node.js, JavaScript, Java, Python<br />
          - <strong>Certification:</strong> Python for Data Science, AI & Development from IBM<br />
          - <strong>Experience:</strong> Gained through various semester projects<br />
          - <strong>Goal:</strong><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Leverage diverse skill set to create innovative solutions that drive business growth<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Deliver exceptional user experiences<br />
          - <strong>Traits:</strong><br />
            &nbsp;&nbsp;&nbsp;&nbsp;Thrives in collaborative environments<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Enjoys solving complex problems<br />
            &nbsp;&nbsp;&nbsp;&nbsp;Eager to explore new technologies and contribute to open-source projects
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
