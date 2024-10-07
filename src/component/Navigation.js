import React from 'react'

export default function Navigation() {
  return (
    <div>
         <nav class="Main-Nav">
      <div class="Nav-Wrapper">
        <div class="logo">
          <img src="assets/images/logo.png" alt=""/>
        </div>
        <input type="checkbox" name="nav-slide" id="button-menu"></input>
        <input type="checkbox" name="nav-slide" id="button-menu"></input>
        <ul class="Nav-Links">
          <label
            for="button-menu"
            class="toggle-button-nav button-cancel "
          >
            <i class="fi fi-rr-cross"></i>
          </label>
          <li>
            <a href="/">INTERNSHIP</a>
          </li>
          <li>
            <a href="/products" class="for-desktop">
              SKILLS
            </a>
            <input type="checkbox" id="showMenu"></input>
            <label for="showMenu" class="for-mobile" >
              SKILLS
            </label>
            <div class="Mega-Box">
              <div class="Mega-Box-Content">
                <div class="Content-Row">
                  <img src="assets/images/istockphoto-1166954025-170667a-removebg-preview.png" />
                </div>
                <div class="Content-Row">
                  <header>PROGRAMMING LANGUAGE</header>

                  <ul class="Mega-Links">
                    <li>
                      <a href="#">JAVA SCRIPT</a>
                    </li>
                    <li>
                      <a href="#">REACT JS</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">CSS BOOTSTRAP</a>
                    </li>
                    <li>
                      <a href="#">KOTLIN</a>
                    </li>
                  </ul>
                </div>
                <div class="Content-Row">
                  <header>WEB DEVELOPMENT TOOLS</header>
                  <ul class="Mega-Links">
                    <li>
                      <a href="#">VS CODE</a>
                    </li>
                    <li>
                      <a href="#">UX/UI DESIGNING</a>
                    </li>
                    <li>
                      <a href="#">FIGMA</a>
                    </li>
                    <li>
                      <a href="#">ADOBE XD</a>
                    </li>
                    <li>
                      <a href="#">ILLUSTRATOR</a>
                    </li>
                  </ul>
                </div>
                <div class="Content-Row">
                  <header>FOTNTEND DEVELOPEMENT</header>
                  <ul class="Mega-Links">
                    <li>
                      <a href="#">FRONTEND NINJA (COMPLET FRONTEND DEVE)</a>
                    </li>
                    <li>
                      <a href="#">HTML CSS MEDIQ QUERY</a>
                    </li>
                    <li>
                      <a href="#">JAVASCRIPT  JQUERY</a>
                    </li>
                    <li>
                      <a href="#">EXPERT IN JAVASCRIPT</a>
                    </li>
                    <li>
                      <a href="#">REACT JS DEVELOPMENT</a>
                    </li>
                    <li>
                      <a href="#">FRONT END WITH JS & REACT JS</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
              <a href="/">blog</a>
            </li>
          <li>
            <a href='/contact-us'>Contact Us</a>
          </li>
          <li>
              <a href="/">why us?</a>
            </li>
          <li>
              
            <a href="#" class="for-desktop">
              PROJECTS
            </a>
            <input type="checkbox" id="showDrop"></input>
            <label for="showDrop" class="for-mobile">
              PROJECTS
            </label>
            <ul class="Drop-Down">
              <li>
              <a href='/about-us'>HTML CSS</a>
              </li>
              <li>
                <a href="#">Programming fundamentals</a>
              </li>
              <li>
                <a href="#">JQuery </a>
              </li>
              <li>
                <a href="#">Responsive Design</a>
              </li>
            </ul>
          </li>
        </ul>
        <label
          for="button-menu"
          class="toggle-button-nav button-menu "
        >
          <i class="fi fi-rr-align-justify"></i>
        </label>
      </div>
    </nav>
    </div>
  )
}
