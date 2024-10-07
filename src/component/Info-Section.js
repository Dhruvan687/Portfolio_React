import React from 'react'

export default function InfoSection() {
  return (
    <div>
      <div class="mp-b2">
      <div class="mp-b2-contaiar">
        <div class="mp-b2-left">
          <p>WELCOME TO MY WORLD</p>
          <h1>Hi, I’m <span>Dhruvan Gandhi</span></h1>
          <p>
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          {/* <!-- ---------social media--------  --> */}
          <h2><span> Find Me On </span></h2>
          <div class="mp-b2-logo">
            <div class="wrapper">
              <div class="button">
                <div class="icon">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <span>Facebook</span>
              </div>
              <div class="button">
                <div class="icon">
                  <i class="fab fa-twitter"></i>
                </div>
                <span>Twitter</span>
              </div>
              <div class="button">
                <div class="icon">
                  <i class="fab fa-instagram"></i>
                </div>
                <span>Instagram</span>
              </div>
              <div class="button">
                <div class="icon">
                  <i class="fab fa-github"></i>
                </div>
                <a href="https://github.com/Dhruvan687"><span>Github</span></a>
              </div>
              <div class="button">
                <div class="icon">
                <i class="fab fa-linkedin-in"></i>
                </div>
                <a href='https://www.linkedin.com/in/dhruvan-gandhi/'><span>LinkdIn</span></a>
              </div>
            </div>
          </div>
        </div>
        <div class="mp-b2-right">
          <div class="mp-b2-img-shelf">
            <img src="assets/images/Illustrator-Vector-Illustration-1-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
