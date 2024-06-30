import { React } from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div id="display">
          0
        </div>
        <div className="buttons">
          <div className="cal-col">
            <button id="clear">Clear</button>
            <button id="divide">/</button>
            <button id="multiply">*</button>
          </div>
          <div class="cal-col">
            <button id="1">1</button>
            <button id="2">2</button>
            <button id="3">3</button>
            <button id="subtract">-</button>
          </div>
          <div className="cal-col">
            <button id="4">4</button>
            <button id="5">5</button>
            <button id="6">6</button>
            <button id="add">+</button>
          </div>
          <div className="cal-col">
            <button id="7">7</button>
            <button id="8">8</button>
            <button id="9">9</button>
            <button id="equals">=</button>
          </div>
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
