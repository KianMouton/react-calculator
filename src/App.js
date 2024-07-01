import { React, useState } from "react";
import { evaluate } from "mathjs"
import './App.css';

function App() {

  const [ input, setInput ] = useState("");
  const [ previous, setPrevious ] = useState("");

  //clears text in the input
  const handleClear = () => {
    setInput("");
    setPrevious("");
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
    const previousValue = document.getElementById("previous");
    const values = input;
    const result = evaluate(values);
    output.textContent += "=";
    previousValue.textContent = result;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div id="display">
          <p id="output">{input}</p>
          <p id="previous">{previous}</p>
        </div>
        <div className="buttons">
          <div className="cal-col">
            <button onClick={handleClear} id="clear">Clear</button>
            <button onClick={handleNumber} id="divide">/</button>
            <button onClick={handleNumber} id="multiply">*</button>
            <button onClick={handleNumber} id="decimal">.</button>
          </div>
          <div class="cal-col">
            <button onClick={handleNumber} id="zero">0</button>
            <button onClick={handleNumber} id="one">1</button>
            <button onClick={handleNumber} id="two">2</button>
            <button onClick={handleNumber} id="three">3</button>
            <button onClick={handleNumber} id="subtract">-</button>
          </div>
          <div className="cal-col">
            <button onClick={handleNumber} id="four">4</button>
            <button onClick={handleNumber} id="five">5</button>
            <button onClick={handleNumber} id="six">6</button>
            <button onClick={handleNumber} id="add">+</button>
          </div>
          <div className="cal-col">
            <button onClick={handleNumber} id="seven">7</button>
            <button onClick={handleNumber} id="eight">8</button>
            <button onClick={handleNumber} id="nine">9</button>
            <button onClick={equals} id="equals">=</button>
          </div>
          
        </div>
      </div>
    </div>
    
  );
}

export default App;
