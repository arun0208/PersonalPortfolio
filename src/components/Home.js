import React from 'react';
import '../styles/Home.css';
import homepage from '../images/homepage.svg'

function Home() {
  return (
    <div className="home">
      <h1>Hello There, It's me Arun Sharma</h1>
      <p>Discover my work and contact me for collaboration.</p>
      <div className='image-container'>
        <img className='image' src={homepage} alt='hello from arun' />
      </div>
    </div>
  );
}

export default Home;
