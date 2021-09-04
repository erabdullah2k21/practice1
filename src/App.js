import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';


function App() {
    const[value,updateValue]= useState(true)
    const button=()=>{
        updateValue(!value)
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
  
   </div>
  );
}

export default App;
