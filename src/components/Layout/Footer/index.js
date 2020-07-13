import React from 'react';

import './style.scss';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div>
          <span>&copy; CommandPost | ALL RIGHTS RESERVED</span>
        </div>
        <div>
          <nav className="nav">
            <a href="https://ineedhelpers.com" className="nav-link">GET HELP</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
