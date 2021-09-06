import React from 'react'
import './App.css'

const Popup=(p)=>{
    return(
       <div>
         <div>
            {p.content}
          </div>

            <div onClick={p.handleClose} className="close">x</div>
        </div>
    )
}
export default Popup;