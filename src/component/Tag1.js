import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import '../App.css'

const Tag1=()=>{
   return(
     <div className="tag1">
         <h1>Products</h1>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Pricing</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Teams</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Education</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Refer a friend</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Update</p>
     </div>
     


   )
}
export default Tag1