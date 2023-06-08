import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCode, FaEnvelope } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
      <li>
          <a className='name' href='https://www.linkedin.com/in/arun-attri' target='_blank' rel="noreferrer">
          Arun Sharma
          </a>
        </li>
        <li>
          <Link to="/">
            <FaHome /> &nbsp;Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FaCode /> &nbsp;Projects
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaEnvelope /> &nbsp;Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
