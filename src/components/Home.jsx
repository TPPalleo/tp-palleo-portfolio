import React from 'react';

const Home = () => {
  return (
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Your Full Name</h1>
      <p className="text-lg mb-4">A short description about you.</p>
      <img src="your-photo-url.jpg" alt="Your Name" className="w-32 h-32 rounded-full mx-auto" />
    </section>
  );
};

export default Home;
