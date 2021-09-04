import React from 'react'
import './App.css'

const Popup=(p)=>{
    return(
       <div>
         <div className="bg1">
            {p.content}
          </div>

            <div onClick={p.handleClose}>x</div>
        </div>
    )
}
export default Popup;