import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import '../App.css'

const Tag2=()=>{
   return(
     <div className="tag2">
          <h1>About</h1>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Stories</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Community</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Blog</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Careers</p>
                <p><FontAwesomeIcon icon={solid('angle-right')}/>Brand Assets</p>
     </div>
     


   )
}
export default Tag2