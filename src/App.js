import React, {useState} from 'react'
import './App.css';
import Popup from './popup.js'


function App() {
    const[value,updateValue]= useState(true)
    const button=()=>{
        updateValue(!value)
    }
    const[content,updateContent]=useState()
    const popUp=()=>{
      updateContent(!content)
    }
  return (
    <div>
   {value?(
     <div>
     <p>Please Sign up.</p>
     <button className="button" onClick={button}>
       LOGIN
     </button>
     </div>
   ):(
     <div>
       <p>Welcome back!</p>
       <button className="button" onClick={button}>LOGOUT</button>
       </div>
   )
   
   }
    <button onClick={popUp}></button>
  {content && <Popup
     content={
    <div>
      <div className="bg1" ></div>
       <div className="bg2">

         </div>
         </div>
     }

  handleClose={popUp}
  />}
   </div>
  );
}

export default App;
