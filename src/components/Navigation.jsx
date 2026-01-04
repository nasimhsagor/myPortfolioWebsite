import React, { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div id="navigation">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="logo">
              <img src="assets/img/blog/icon.png" alt="NS Logo" style={{ height: '35px', width: '35px', float: 'left', marginTop: '-10px' }} />
              <a href="#" style={{ paddingLeft: '50px' }}>NS Creations</a>
            </div>
          </div>

          <div className="col-sm-9">
            <div className="navigation-menu">
              <div className="navbar">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div className={`navbar-collapse ${mobileMenuOpen ? '' : 'collapse'}`}>
                  <ul className="nav navbar-nav navbar-right">
                    <li><a className="active" href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
                    <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')}>Projects</a></li>
                    <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
