// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useReducer } from 'react';
import { themeReducer } from './reducers/themeReducer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

  return (
    <Router>
      <Header />
      <main className={state.darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
        <ThemeToggle dispatch={dispatch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

