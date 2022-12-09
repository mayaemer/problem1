import "./App.css";
import { useState } from "react";
import AddNote from './components/AddNote.js';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [isShown, setIsShown] = useState(false);
  const [createBtn, setCreateBtn] = useState(true);
  
  const create = event => {
    setCreateBtn(false);
    setIsShown(true);
  };


  return (
    <div className="App">
      
      {createBtn && (<button onClick={create}>Create Note</button>)}
      
      {isShown && <AddNote/>}

      
    </div>
  );
}

export default App;
