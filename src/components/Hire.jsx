import React from 'react';

const Hire = () => {
  return (
    <section id="hire">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-6 col-xs-12">
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ margin: 0 }}>Hire Me</h2>
            </div>

            I am currently open to new opportunities where I can leverage my expertise in .NET and Full Stack development to build impactful solutions.
            With a passion for solving complex problems and a commitment to continuous learning, I am ready to contribute to your team's success. Whether you have a project in mind or need a dedicated engineer, let's collaborate to bring your vision to life!
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '20px' }}>
              <a href="https://wa.me/8801746330309" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', transition: 'transform 0.3s' }} className="social-hover">
                <i className="fa fa-whatsapp fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/nasimhsagor/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', transition: 'transform 0.3s' }} className="social-hover">
                <i className="fa fa-linkedin-square fa-3x"></i>
              </a>
              <a href="https://twitter.com/nasimhsagor/" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2', transition: 'transform 0.3s' }} className="social-hover">
                <i className="fa fa-twitter-square fa-3x"></i>
              </a>
              <a href="https://www.upwork.com/freelancer/nasimhsagor/" target="_blank" rel="noopener noreferrer" style={{ color: '#6fda44', transition: 'transform 0.3s' }} className="social-hover">
                <i className="fa fa-briefcase fa-3x" title="Upwork"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hire;
