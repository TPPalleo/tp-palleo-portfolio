import React from 'react';

const Contact = () => {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <a href="mailto:your-email@example.com" className="block mb-4 text-blue-500 hover:underline">Email Me</a>
      <a href="https://github.com/your-github" className="block mb-4 text-blue-500 hover:underline">GitHub</a>
      <a href="https://linkedin.com/in/your-linkedin" className="block text-blue-500 hover:underline">LinkedIn</a>
    </section>
  );
};

export default Contact;
