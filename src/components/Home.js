import React from 'react';
import '../styles/Home.css';
import homepage from '../images/homepage.svg'
import resume from '../images/Arun_Sharma_Resume.pdf'
import $ from 'jquery';

function Home() {
  $(document).ready(function() {
    setTimeout(function() {
      $(".btn-epic").show();
    }, 1500);
  });
  return (
    <div className="home">
      <h1 className='home-line'>Hey There, <br />It's me <span className='home-name'>Arun Sharma</span></h1>
      <p>Discover my work and contact me for collaboration.</p>
      <a className='home-resume btn-epic' href={resume} download>
      <div><span>Download Resume</span><span>Download Resume</span></div>
      </a>
      <div className='image-container'>
        <img className='image' src={homepage} alt='hello from arun' />
      </div>
    </div>
  );
}

export default Home;
