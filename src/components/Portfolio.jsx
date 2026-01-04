import React, { useEffect } from 'react';

const Portfolio = () => {
  useEffect(() => {
    // Initialize mixItUp when the component mounts
    if (window.$ && window.$('#port-image').length) {
      try {
        window.$('#port-image').mixItUp();
      } catch (e) {
        console.error("MixItUp initialization failed", e);
      }
    }
  }, []);

  return (
    <section id="portfolio">
      <div className="container">
        <div className="row">
          <div data-aos="fade-up">
            <div className="col-md-12 text-center">
              <h2>Projects</h2>
            </div>

            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="filter-btn col-md-12 text-center">
                <div className="filter active" data-filter="all">All</div>
                <div className="filter" data-filter=".website">Website</div>
                <div className="filter" data-filter=".app">App</div>
                <div className="filter lst-cld" data-filter=".deeplearning">AI / Machine Learning</div>
              </div>

              <div id="port-image" className="container">
                <div className="card deeplearning grid mix">
                  <div className="card-header">
                    <img src="/assets/img/projects/Recipe_Generation_From_Food_Images.webp" alt="rover" />
                  </div>
                  <div className="card-body">
                    <span className="tag tag-teal">AI / Machine Learning</span>
                    <h4>Recipe Generation From Food Images</h4>
                    <div>
                      <a href="#" className="btn btn-success">View on Github</a>
                    </div>
                  </div>
                </div>

                <div className="card app grid mix">
                  <div className="card-header">
                    <img src="/assets/img/projects/Dash_4U Analysis.webp" alt="ballons" />
                  </div>
                  <div className="card-body">
                    <span className="tag tag-purple">App</span>
                    <h4>Business Analytics Application using Dash</h4>
                    <div>
                      <a href="#" className="btn btn-success">View on Github</a>
                    </div>
                  </div>
                </div>

                <div className="card website grid mix">
                  <div className="card-header">
                    <img src="/assets/img/projects/4U_Shop.webp" alt="city" />
                  </div>
                  <div className="card-body">
                    <span className="tag tag-pink">Website</span>
                    <h4>Website for 4u Mens & Sports Retail shop</h4>
                    <div>
                      <a href="#" className="btn btn-primary">Demo</a>
                      <a href="#" className="btn btn-success">View on Github</a>
                    </div>
                  </div>
                </div>

                <div id="space"></div>

                <div className="card Website grid mix">
                  <div className="card-header">
                    <img src="/assets/img/projects/TKM_Complex.webp" alt="rover" />
                  </div>
                  <div className="card-body">
                    <span className="tag tag-pink">Webiste</span>
                    <h4>Website for TKM Shopping Complex</h4>
                    <div>
                      <a href="#" className="btn btn-primary">Demo</a>
                      <a href="#" className="btn btn-success">View on Github</a>
                    </div>
                  </div>
                </div>

                <div className="card app grid mix">
                  <div className="card-header">
                    <img src="/assets/img/projects/Excel_POS.webp" alt="ballons" />
                  </div>
                  <div className="card-body">
                    <span className="tag tag-purple">App</span>
                    <h4>Billing Software using Excel</h4>
                    <div>
                      <a href="#" className="btn btn-success">View on Github</a>
                    </div>
                  </div>
                </div>

                <div className="card app grid mix">
                  <div className="card-header">
                    <img src="/assets/img/projects/Flask_Blog.webp" alt="city" />
                  </div>
                  <div className="card-body">
                    <span className="tag tag-purple">App</span>
                    <h4>Flask : Blog Application</h4>
                    <div>
                      <a href="#" className="btn btn-primary">Demo</a>
                      <a href="#" className="btn btn-success">View on Github</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
