import React from 'react'
import Footer from './component/Footer';
import Navigation from './component/Navigation';
import './App.css'
import InfoSection from './component/Info-Section';
import ContactMe from './component/ContactMe';

function App() {
  return (
    <div>
      <Navigation/>
      <InfoSection/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
