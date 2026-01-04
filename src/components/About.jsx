import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="description col-md-6 col-sm-6 col-xs-12">
            <h2>Currently, Working as </h2>
            <h4>Software Engineer at <a style={{ color: 'Black' }} href="#">Mutual Apps</a></h4>
            <p>
              I am a passionate and dedicated Software Engineer with over three years of professional experience in web application and backend development. I hold a Bachelor's degree in Computer Science & Engineering from American International University-Bangladesh (AIUB).
              <br /><br />
              Currently, I work at Mutual Apps, designing and developing enterprise-level ERP, trade, and business web applications. My core expertise lies in ASP.NET, ASP.NET Core, MVC, Web API, and Angular. I am experienced in building scalable backend systems, managing Linux servers, and deploying with Nginx.
              <br /><br />
              I have also contributed to organizations like Q-Soft Precise Assistance, AkijBashir Group. My skillset spans SQL Server, PostgreSQL, MySQL, and modern DevOps practices using Docker and Git. I am a strong advocate for SOLID principles and clean architecture.
            </p>

            {/* <ul className="social-icons">
              <li><a href="https://www.linkedin.com/in/nasimhsagor/"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/nasimhsagor"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.hackerrank.com/nasimhsagor/"><i className="fa fa-hackerank"></i></a></li>
            </ul> */}

            <p>
              <a href="https://drive.google.com/file/d/11meY7qDqEpDF-xyS20t4wwpRzump3pTv/view?usp=sharing" className="btn btn-dark with-arrow smoth-scroll">
                My Resume
                <i className="fa fa-download"></i>
              </a>
            </p>
          </div>

          <div className="facts col-md-6 col-sm-6 col-xs-12">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                <div className="count-item">
                  <div className="numscroller" data-slno='1' data-min='0' data-max='3' data-delay='3' data-increment="1">3</div>
                  <div className="count-name-intro">Years Experience</div>
                </div>
              </div>
              <div id="badge" className="col-md-8 col-sm-8 col-xs-12 float-center" style={{ objectFit: 'cover', paddingLeft: '5px' }}>
                {/* Placeholder for badge or profile image side */}
                <img src="/assets/img/blog/Badges.jpg" style={{ height: '150px' }} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
