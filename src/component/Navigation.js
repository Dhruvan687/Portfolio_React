import React from 'react';
import '../App.css'

const Navigation = () => {
  const handleCollapse = () => {
    document.getElementById('button-menu').checked = false;
    document.getElementById('showMenu').checked = false;
    document.getElementById('showDrop').checked = false;
  };

  return (
    <nav className="Main-Nav">
      <div className="Nav-Wrapper">
        <div className="logo">
          <img src="assets/images/logo.png" alt="Site Logo" />
        </div>
        <input type="checkbox" name="nav-slide" id="button-menu" />
        <input type="checkbox" name="nav-slide" id="button-menu" />
        <ul className="Nav-Links">
          <label
            htmlFor="button-menu"
            className="toggle-button-nav button-cancel"
            onClick={handleCollapse}
          >
            <i className="fi fi-rr-cross"></i>
          </label>
          <li>
            <a href="/" onClick={handleCollapse}>INTERNSHIP</a>
          </li>
          <li>
            <a href="/products" className="for-desktop" onClick={handleCollapse}>
              SKILLS
            </a>
            <input type="checkbox" id="showMenu" />
            <label htmlFor="showMenu" className="for-mobile" onClick={handleCollapse}>
              SKILLS
            </label>
            <div className="Mega-Box">
              <div className="Mega-Box-Content">
                <div className="Content-Row">
                  <img src="assets/images/istockphoto-1166954025-170667a-removebg-preview.png" />
                </div>
                <div className="Content-Row">
                  <header>Front-End</header>
                  <ul className="Mega-Links">
                    <li>
                      <a href="#" onClick={handleCollapse}>React Js</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Javacript</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>HTML5</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Css3</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Bootstrap</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Media-Query</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Webpack</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Swagger UI</a>
                    </li>
                  </ul>
                </div>
                <div className="Content-Row">
                  <header>UX-UI</header>
                  <ul className="Mega-Links">
                    <li>
                      <a href="#" onClick={handleCollapse}>Adobe XD</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Figma</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Sketch</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Adobe AI</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Adobe Photoshop</a>
                    </li>
                  </ul>
                </div>
                <div className="Content-Row">
                  <header>Back-End</header>
                  <ul className="Mega-Links">
                    <li>
                      <a href="#" onClick={handleCollapse}>Node.js</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Fast API</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>REST APIs</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Flask</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Django</a>
                    </li>
                  </ul>
                </div>
                <div className="Content-Row">
                  <header>Databases</header>
                  <ul className="Mega-Links">
                    <li>
                      <a href="#" onClick={handleCollapse}>MySQL</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>PostgreSQL</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>PL/SQL</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>MongoDB</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>Firebase</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="/" onClick={handleCollapse}>blog</a>
          </li>
          <li>
            <a href="/contact-us" onClick={handleCollapse}>Contact Us</a>
          </li>
          <li>
            <a href="/" onClick={handleCollapse}>why us?</a>
          </li>
          <li>
            <a href="#" className="for-desktop" onClick={handleCollapse}>
              free courses
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="for-mobile" onClick={handleCollapse}>
              free courses
            </label>
            <ul className="Drop-Down">
              <li>
                <a href="/about-us" onClick={handleCollapse}>HTML CSS</a>
              </li>
              <li>
                <a href="#" onClick={handleCollapse}>Programming fundamentals</a>
              </li>
              <li>
                <a href="#" onClick={handleCollapse}>JQuery</a>
              </li>
              <li>
                <a href="#" onClick={handleCollapse}>Responsive Design</a>
              </li>
            </ul>
          </li>
        </ul>
        <label
          htmlFor="button-menu"
          className="toggle-button-nav button-menu"
          onClick={handleCollapse}
        >
          <i className="fi fi-rr-align-justify"></i>
        </label>
      </div>
    </nav>
  );
};

export default Navigation;