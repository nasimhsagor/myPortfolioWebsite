import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the new styles

const useTypewriter = (textArray, typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  useEffect(() => {
    const i = loopNum % textArray.length;
    const fullText = textArray[i];

    const handleTyping = () => {
      setDisplayedText(prev =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTypingSpeedState(pauseDuration);
        setIsDeleting(true);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeedState(typingSpeed);
      } else {
        setTypingSpeedState(isDeleting ? deletingSpeed : typingSpeed);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeedState);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, textArray, typingSpeed, deletingSpeed, pauseDuration, typingSpeedState]);

  return displayedText;
};

const Home = () => {
  const roles = [
    "Software Engineer (.NET)",
    "Full Stack Developer",
    "Backend Specialist",
    "Cloud Enthusiast"
  ];

  const typingText = useTypewriter(roles);

  return (
    <div id="home" className="home-bg" style={{ backgroundImage: "url('/assets/img/blog/bgwall.jpg')" }} data-stellar-background-ratio="0.6">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="home-text">
              <div className="glass-content" data-aos="fade-up" data-aos-duration="1500">
                <div className="profile-pic-container">
                  <img src="/assets/img/blog/sagor.png" alt="Nasim Haidar Sagor" className="profile-pic-img" />
                </div>

                <h1 className="name-gradient">Hi, I'm Nasim Haidar Sagor</h1>

                <h3 style={{ color: 'rgba(255,255,255,0.9)', minHeight: '30px' }}>
                  I am a <span className="typing-cursor" style={{ color: '#48b14d', fontWeight: 'bold' }}>{typingText}</span>
                </h3>

                <div className="hero-actions">
                  <a href="https://drive.google.com/file/d/11meY7qDqEpDF-xyS20t4wwpRzump3pTv/view?usp=sharing" className="primary-btn smoth-scroll">
                    Download Resume <i className="fa fa-briefcase"></i>
                  </a>
                  <a href="#contact" className="secondary-btn smoth-scroll">
                    Contact Me <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>

            <a className="smoth-scroll" href="#about"><i className="fa fa-angle-down arrow"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
