import { useState } from 'react'
import './App.css'
import Popup from './components/Popup';

function App() {

  const [isActive, setIsActive] = useState(false);
  const [actionType, setActionType] = useState("");


  function handleOpen(text){
    setActionType(text);
    setIsActive(true);
  }

  function handleClose(){
    setActionType("");
    setIsActive(false)
  };

  return (
    <>
     <h1>This is the popup page </h1>
     <button onClick={() =>{
      handleOpen("edit")
     }}>Edit </button>
     <button onClick={() =>{
      handleOpen("delete")
     }}>Delete </button>

     {/* showing the popup */}

     {
      isActive && (
        <Popup 
         actionType={actionType}
         onClose={handleClose}
        />
      )
     }
    </>
  )
}

export default App
