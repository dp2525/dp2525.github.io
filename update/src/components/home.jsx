import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <div id="wallpaper" className="wallpaper" data-image="images/abstract.jpg"></div>
      <div className="content">
        <aside className="side">
          <figure id="picture" className="picture">
            <div className="picture-shadow"></div>
            <img id="pictureImage" className="picture-image" src="../images/pic.PNG" alt="picture" width="320" height="320" />
          </figure>
        </aside>
        <main className="about">
          <h1 className="name">Hi, I'm </h1>
          <p className="job">Web Developer</p>
          <hr className="hr" />
          <div className="description">
            <p>
              I invest my time learning new skills and improving my web
              development abilities.
            </p>
          </div>
          <div className="contact">
            <a className="button" href="/contact">
              Get in touch
            </a>
          </div>
        </main>
      </div>
      <div className="skills">
        <h1>skills</h1>
        <hr />
        <div className="skill-set-container">
          <div className="skill-set-1">
            <div className="skill-1">
              <h3>HTML/CSS</h3>
              <div className="skill-1-bar-container">
                <div className="skill-1-bar"></div>
                <p>70%</p>
              </div>
            </div>
            <div className="skill-2">
              <h3>Javascript</h3>
              <div className="skill-2-bar-container">
                <div className="skill-2-bar"></div>
                <p>70%</p>
              </div>
            </div>
            <div className="skill-3">
              <h3>React</h3>
              <div className="skill-3-bar-container">
                <div className="skill-3-bar"></div>
                <p>80%</p>
              </div>
            </div>
          </div>
          <div className="skill-set-2">
            <div className="skill-1">
              <h3>Node</h3>
              <div className="skill-1-bar-container">
                <div className="skill-1-bar"></div>
                <p>50%</p>
              </div>
            </div>
            <div className="skill-2">
              <h3>Angular</h3>
              <div className="skill-2-bar-container">
                <div className="skill-2-bar"></div>
                <p>70%</p>
              </div>
            </div>
            <div className="skill-3">
              <h3>MongoDB</h3>
              <div className="skill-3-bar-container">
                <div className="skill-3-bar"></div>
                <p>80%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="works">
        <h1>Work Experience</h1>
        <h3>Jr. Web Developer - CodeByte, Surat, India | July 2019 - January 2021</h3>
        <p>Developed web application Fitness Tracking using various technology and frameworks such as, ReactJs, MongoDB, JS, HTML5, CSS. Learned about Agile methods while working with stakeholders.
          Experienced in website migration, development. <a href="/about">Click here for more details...</a></p>
        <div className="works-container">
          <div className="work work-1">
            <a href="#">
              <img src="../images/animation effects.gif" alt="picture" />
              <div className="work-title">
                <h2>project title</h2>
                <h3>client name</h3>
              </div>
            </a>
          </div>
          <div className="work work-2">
            <a href="#">
              <img src="../images/robot head.jpg" alt="picture" />
              <div className="work-title">
                <h2>project title</h2>
                <h3>client name</h3>
              </div>
            </a>
          </div>
          <div className="work work-3">
            <a href="#">
              <img src="../images/qr code generator.jpg" alt="picture" />
              <div className="work-title">
                <h2>project title</h2>
                <h3>client name</h3>
              </div>
            </a>
          </div>
          <div className="work work-4">
            <a href="#">
              <img src="../images/weight converter.jpg" alt="picture" />
              <div className="work-title">
                <h2>project title</h2>
                <h3>client name</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
