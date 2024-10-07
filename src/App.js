import React from 'react'
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import './App.css'
import InfoSection from './component/Info-Section';

function App() {
  return (
    <div>
      <Navigation/>
      <InfoSection/>
      <Footer/>
    </div>
  );
}

export default App;
