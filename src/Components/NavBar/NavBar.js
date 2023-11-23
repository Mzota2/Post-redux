import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <header>
        <nav className='container row'>
            <h1>Logo</h1>

            <ul className='nav-container'>
                <li className='nav-item'><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">Profile</a></li>
                <li className='nav-item'><a href="#">Friends</a></li>
            </ul>

            <ul className='nav-container'>
                <li className='nav-item nav-btn'><a href="#">Sign In</a></li>
                <li className='nav-item nav-btn'><a href="#">Sign Up</a></li>
            </ul>

        </nav>
    </header>
  )
}

export default NavBar