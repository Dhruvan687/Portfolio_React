import React from "react";
import Tag1 from "./footerTags/Tag1";
import Tag2 from "./footerTags/Tag2";
import Tag3 from "./footerTags/Tag3";
import Tag4 from "./footerTags/Tag4";
import '../App.css'

const Footer=()=>{
   return(
     <div className="footer">
        <div class="footer">
  <div class="container">
      <div class="pos">
          <div class="col">
          
              <h3>company</h3>
              <ul>
                 <p>
                  Working to bring significant changes in online-based learning by 
                      doing extensive research for course curriculum preparation, 
                      student engagements, and looking forward to the flexible education!
                 </p> 
                  <div class="links">
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                      <a href="https://www.instagram.com/?next=%2F"><i class="fab fa-instagram"></i></a>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                  </div>
              </ul>
          </div>

          <div class="col">
              <h3>EXPLORE</h3>
              <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Our services</a></li>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">affiliate program</a></li>
                  
              </ul>
          </div>

          <div class="col">
              <h3>RESOURCES</h3>
              <ul>
                  <li><a href="#"></a></li>
                  <li><a href="#">Student Success
                      </a></li>
                  <li><a href="#">Scholarships
                      </a></li>
                  <li><a href="#">For Business
                      </a></li>
                  <li><a href="#">Go Premium
                      Team Plans</a></li>
                  <li><a href="#">Team Plans</a></li>
              </ul>
          </div>

          <div class="col">
              <h3>ADDRESS</h3>
              
              <ul>
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Our services</a></li>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">affiliate program</a></li>
                  
              </ul>


          </div>

      </div>
  </div>
</div>
     </div>
   )
}
export default Footer