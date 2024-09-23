import React from "react";
import Tag1 from "./footerTags/Tag1";
import Tag2 from "./footerTags/Tag2";
import Tag3 from "./footerTags/Tag3";
import Tag4 from "./footerTags/Tag4";
import '../App.css'

const Footer=()=>{
   return(
     <div className="footer">
         <Tag1/>
         <Tag2/>
         <Tag3/>
         <Tag4/>
     </div>
   )
}
export default Footer