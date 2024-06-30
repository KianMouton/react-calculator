import { React, useState } from "react";
import { evaluate } from "mathjs"
import './App.css';

function App() {

  const [ input, setInput ] = useState("");

  //clears text in the input
  const handleClear = () => {
    setInput("");
  }

  const handleNumber = (event) => {
    const output = document.getElementById("output");
    const value = event.target.textContent;
    output.textContent += value;
    //set state
    setInput(output.textContent);
  }

  const equals = () => {
    const output = document.getElementById("output");
    const values = input.split("").join(" ");
    const result = evaluate(values);
    output.textContent += "=" + result;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div id="display">
          <p id="output">{input}</p>
        </div>
        <div className="buttons">
          <div className="cal-col">
            <button onClick={handleClear} id="clear">Clear</button>
            <button onClick={handleNumber} id="divide">/</button>
            <button onClick={handleNumber} id="multiply">*</button>
            <button onClick={handleNumber} id="decimal">.</button>
          </div>
          <div class="cal-col">
            <button onClick={handleNumber} id="1">1</button>
            <button onClick={handleNumber} id="2">2</button>
            <button onClick={handleNumber} id="3">3</button>
            <button onClick={handleNumber} id="subtract">-</button>
          </div>
          <div className="cal-col">
            <button onClick={handleNumber} id="4">4</button>
            <button onClick={handleNumber} id="5">5</button>
            <button onClick={handleNumber} id="6">6</button>
            <button onClick={handleNumber} id="add">+</button>
          </div>
          <div className="cal-col">
            <button onClick={handleNumber} id="7">7</button>
            <button onClick={handleNumber} id="8">8</button>
            <button onClick={handleNumber} id="9">9</button>
            <button onClick={equals} id="equals">=</button>
          </div>
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
