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
              courses
            </a>
            <input type="checkbox" id="showMenu" />
            <label htmlFor="showMenu" className="for-mobile" onClick={handleCollapse}>
              courses
            </label>
            <div className="Mega-Box">
              <div className="Mega-Box-Content">
                <div className="Content-Row">
                  <img src="assets/images/istockphoto-1166954025-170667a-removebg-preview.png" />
                </div>
                <div className="Content-Row">
                  <header>PROGRAMMING</header>
                  <ul className="Mega-Links">
                    <li>
                      <a href="#" onClick={handleCollapse}>C PROGRAMMING</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>C++ PROGRAMMING</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>JAVA PROGRAMMING</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>C# PROGRAMMING</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>PYTHON PROGRAMMING</a>
                    </li>
                  </ul>
                </div>
                <div className="Content-Row">
                  <header>WEB DEVELOPMENT</header>
                  <ul className="Mega-Links">
                    <li>
                      <a href="#" onClick={handleCollapse}>Website Design</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>WEB DEVELOPMENT WITH DOTNET CORE</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>WEB DEVELOPMENT WITH DOTNET MVC</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>WEB DEVELOPMENT WITH PYTHON & DJANGO</a>
                    </li>
                  </ul>
                </div>
                <div className="Content-Row">
                  <header>FRONTEND DEVELOPMENT</header>
                  <ul className="Mega-Links">
                    <li>
                      <a href="#" onClick={handleCollapse}>FRONTEND NINJA (COMPLETE FRONTEND DEVE)</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>HTML CSS MEDIA QUERY</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>JAVASCRIPT JQUERY</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>EXPERT IN JAVASCRIPT</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>REACT JS DEVELOPMENT</a>
                    </li>
                    <li>
                      <a href="#" onClick={handleCollapse}>FRONT END WITH JS & REACT JS</a>
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