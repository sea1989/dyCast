import React from 'react';
import Advantages from '../advantages';
import Community from '../Community';
import Download from '../download';
import Header from '../Header';
import Footer from '../Footer';
import CoubBack from '../CoubBackground';
import './style.css';

function MainLand() {
  return (
    <main className='main content'>
      <Header />
      <Advantages />
      <Download />
      <Community />
      <Footer/>
    </main>
   
  );
}

export default MainLand;
