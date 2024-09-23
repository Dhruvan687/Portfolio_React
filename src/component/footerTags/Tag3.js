import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'  
import '../../App.css'

const Tag3=()=>{
   return(
     <div className="tag3">
         <h1>Download</h1>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Web Ul Kit</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Mobile Ul Kit</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Mockups</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Icons</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>PSD Files</p>
     </div>
     


   )
}
export default Tag3