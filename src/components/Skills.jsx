import React, { useEffect } from 'react';

const Skills = () => {
  useEffect(() => {
    // Initialize progress bar animation
    if (window.jQuery && window.jQuery.fn.appear) {
      window.jQuery(".progress").each(function () {
        window.jQuery(this).appear(function () {
          window.jQuery(this).animate({ opacity: 1, left: "0px" }, 800);
          var w = window.jQuery(this).find(".progress-bar").attr("data-width");
          var h = window.jQuery(this).find(".progress-bar").attr("data-height");

          window.jQuery(this).find(".progress-bar").animate({
            width: w + "%",
            height: h ? h + "%" : "100%"
          }, 100, "linear");
        });
      });
    }
  }, []);

  return (
    <section id="skills">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>My Skills</h2>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12">
            <div className="progress-box">
              <p>ASP.NET Core / C# <span className="color-heading pull-right">95%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="95"></div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12 skills-right">
            <div className="progress-box">
              <p>SQL Server / PostgreSQL <span className="color-heading pull-right">90%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="90"></div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12 skills-right">
            <div className="progress-box">
              <p>Angular / React <span className="color-heading pull-right">85%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="85"></div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12">
            <div className="progress-box">
              <p>Web API / REST <span className="color-heading pull-right">95%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="95"></div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12">
            <div className="progress-box">
              <p>Docker / DevOps <span className="color-heading pull-right">80%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="80"></div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12 skills-right">
            <div className="progress-box">
              <p>System Design <span className="color-heading pull-right">85%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="85"></div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12 skills-right">
            <div className="progress-box">
              <p>AWS / Cloud <span className="color-heading pull-right">75%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="75"></div>
              </div>
            </div>
          </div>

          <div className="col-md-5 col-sm-6 col-xs-12">
            <div className="progress-box">
              <p>JavaScript / TypeScript <span className="color-heading pull-right">90%</span></p>
              <div className="progress">
                <div className="progress-bar bg-color-base" role="progressbar" data-width="90"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
