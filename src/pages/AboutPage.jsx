import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.jpg';

function AboutPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '60px',
    left: '0',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    padding: '10px',
    zIndex: 1000,
  };

  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        padding: 0,
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        backgroundImage: `linear-gradient(rgba(10,25,40,0.45), rgba(10,25,40,0.45)), url(${hero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ maxWidth: 980, padding: '60px 20px' }}>
        <h1 onClick={toggleDropdown} style={{ cursor: 'pointer', color: '#fff', marginBottom: 8 }}>
          About Us ▾
        </h1>

        {isDropdownOpen && (
          <div style={dropdownStyle}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li><Link to="/about/profile">Profile</Link></li>
              <li><Link to="/about/management">Management</Link></li>
              <li><Link to="/about/gallery">Gallery</Link></li>
              <li><Link to="/about/news-events">News & Events</Link></li>
            </ul>
          </div>
        )}

        <p style={{ marginTop: '20px', fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)' }}>
          Welcome to our organization. Learn more about the Ghana Air Force, its mission, management,
          gallery, and upcoming events.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
 






