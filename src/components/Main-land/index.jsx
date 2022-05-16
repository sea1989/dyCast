import React from 'react';
import Advantages from '../advantages';
import Community from '../Community';
import Download from '../download';
import Header from '../Header';
import './style.css';

function MainLand() {
  return (
    <main className='main'>
      <Header />
      <Advantages />
      <Download />
      <Community />
    </main>
  );
}

export default MainLand;
