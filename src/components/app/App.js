import React from 'react';
import Header from './header/Header';
import Home from './home/Home';
import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import Timeline from './timeline/Timeline';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
