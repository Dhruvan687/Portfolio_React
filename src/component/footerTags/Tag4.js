import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import '../../App.css'

const Tag4=()=>{
   return(
     <div className="tag4">
         <h1>Get Started</h1>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Tutorial</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Resource</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Guides</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Examples</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Docs</p>
     </div>
     


   )
}
export default Tag4