import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomList from './components/RoomList';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Header />
      <Hero />
      <RoomList />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
