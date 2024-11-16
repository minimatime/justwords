import React from "react";
import './App.css';
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom"

// function Button() {
//   return (
//     <button>read me</button>
//   );
// }
function App() {
  return (
    <div className="App">
      <h1> these are all just words</h1>
      <div className="grid-row">
        <div className="Poem">
          <Link to ="/poem1"><h1>001</h1></Link>
        </div>
        <div className="Poem">
          <h1>002</h1>
          <Link to = "/poem1"></Link>
        </div>
      </div>
    </div>
  );
}


export default App;
