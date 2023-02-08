import './App.css';
import  List  from "./components/List";

import { useState } from 'react';



function App() {
  let [isOpen, setIsOpen] = useState(true)
  
  return (
    <div className="one">
      <List isOpen={isOpen} setIsOpen={setIsOpen}/>
      
    </div>
  );
}

export default App;
