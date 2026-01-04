import React from 'react';

const Certificates = () => {
  const handleImageClick = (e) => {
    if (window.myFunction) {
      window.myFunction(e.currentTarget);
    }
  };

  return (
    <section id="certificates">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <h2>Certificates</h2>
        </div>

        {/* The four columns */}
        <div className="row">
          <div className="grid col-md-4 col-sm-6 col-xs-12">
            <a href="/assets/img/certificates/file.webp" className="image-popup">
              <img src="/assets/img/certificates/file.webp" alt="Snow" style={{ width: '90%' }} onClick={handleImageClick} />
            </a>
          </div>

          <div className="grid col-md-4 col-sm-6 col-xs-12">
            <a href="/assets/img/certificates/file.webp" className="image-popup">
              <img src="/assets/img/certificates/file.webp" alt="Nature" style={{ width: '90%' }} onClick={handleImageClick} />
            </a>
          </div>

          <div className="grid col-md-4 col-sm-6 col-xs-12">
            <a href="/assets/img/certificates/file.webp" className="image-popup">
              <img src="/assets/img/certificates/file.webp" alt="Lights" style={{ width: '90%' }} onClick={handleImageClick} />
            </a>
          </div>

          <div className="grid col-md-4 col-sm-6 col-xs-12">
            <a href="/assets/img/certificates/file.webp" className="image-popup">
              <img src="/assets/img/certificates/file.webp" alt="Mountains" style={{ width: '90%' }} onClick={handleImageClick} />
            </a>
          </div>

          <div className="grid col-md-4 col-sm-6 col-xs-12">
            <a href="/assets/img/certificates/file.webp" className="image-popup">
              <img src="/assets/img/certificates/file.webp" alt="Lights" style={{ width: '90%' }} onClick={handleImageClick} />
            </a>
          </div>

          <div className="grid col-md-4 col-sm-6 col-xs-12">
            <a href="/assets/img/certificates/file.webp" className="image-popup">
              <img src="/assets/img/certificates/file.webp" alt="Lights" style={{ width: '90%' }} onClick={handleImageClick} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
