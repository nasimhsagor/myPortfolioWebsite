import React from 'react';

const Navbar = () => {
  return (
    <div id="navigation">
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="logo">
              <img src="/assets/img/blog/icon.png" alt="" style={{ height: '8rem', float: 'left', marginTop: '-10px' }} />
            </div>
          </div>

          <div className="col-sm-9">
            <div className="navigation-menu">
              <div className="navbar">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a className="active smoth-scroll" href="#home">Home</a></li>
                    <li><a className="smoth-scroll" href="#about">About</a></li>
                    <li><a className="smoth-scroll" href="#portfolio">Projects</a></li>
                    <li><a className="smoth-scroll" href="#contact">Contact</a></li>
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

export default Navbar;
