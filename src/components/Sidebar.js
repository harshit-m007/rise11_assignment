import React from 'react';
import justiceImage from './justice.png';
import './Sidebar.css';
import jur from './jur.png'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src = {jur} alt = "jur"></img>
      </div>
      <nav className="menu">
        <ul>
          <li> <img src='/images/dashboard.png'></img> Dashboard</li>
          <li><img src='/images/cases.png'></img> My Cases</li>
          <li><img src='/images/activities.png'></img> Activities</li>
          <li><img src='/images/calender.png'></img> Calendar</li>
          <li><img src='/images/files.png'></img> Files</li>
          <li><img src='/images/dispute.png'></img> Open a Dispute</li>
        </ul>
      </nav>
      <div className="justice-banner">
        <img src={justiceImage} alt="yo" />
      </div>
    </div>
  );
}

export default Sidebar;
