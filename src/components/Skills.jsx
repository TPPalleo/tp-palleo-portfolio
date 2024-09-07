import React from 'react';

const Skills = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <a href="resume-url.pdf" className="block mb-4 text-blue-500 hover:underline">Download Resume</a>
      <div className="flex flex-wrap gap-4">
        <img src="tech-icon1.png" alt="Technology 1" className="w-12 h-12"/>
        <img src="tech-icon2.png" alt="Technology 2" className="w-12 h-12"/>
        {/* Add more tech icons as needed */}
      </div>
    </section>
  );
};

export default Skills;
