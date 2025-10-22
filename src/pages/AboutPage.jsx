import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div style={{ position: 'relative', textAlign: 'center', padding: '40px' }}>
      <h1 onClick={toggleDropdown} style={{ cursor: 'pointer', color: '#2E8BC0' }}>
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

      <p style={{ marginTop: '40px', fontSize: '1.1rem' }}>
        Welcome to our organization. Click on any of the sections above to learn more
        about the Ghana Air Force, its management, gallery, and upcoming events.
      </p>
    </div>
  );
}

export default AboutPage;
 






