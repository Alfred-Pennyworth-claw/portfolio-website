import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
    </>
  );
}
