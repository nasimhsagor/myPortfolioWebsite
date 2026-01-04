import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Hire from './components/Hire';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Hire />
      {/* <Certificates /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
