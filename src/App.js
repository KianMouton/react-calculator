import { React, useState } from "react";
import { evaluate } from "mathjs"
import './App.css';

function App() {

  const [ input, setInput ] = useState(0);

  //clears text in the input
  const handleClear = () => {
    setInput(0);
  }

  const handleNumber = (event) => {
    const value = event.target.textContent;
    const lastIndex = input.length - 1;

    if (input === 0) {
      return setInput(value);
    } else if (input === "0" && value === "0") {
      return;
    }

    if (value === ".") {
      const currentNumber = input.split(/[-+/*]/).pop();
      if (currentNumber.includes(".")) {
        return;
      }
    }

    if (value === "-" || value === "+" || value === "/" || value === "*") {
      if (input[lastIndex] === "-" || input[lastIndex] === "+" || input[lastIndex] === "/" || input[lastIndex] === "*") {
        return;
      }
    }

    setInput(input + value);
    }

  const equals = () => {
    const result = evaluate(input);
    setInput(result);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div id="output">
          <p id="display">{input}</p>
        </div>
        <div className="buttons">
          <div className="cal-col">
            <button onClick={handleNumber} id="zero">0</button>
            <button onClick={handleClear} id="clear">Clear</button>
            <button onClick={handleNumber} id="divide">/</button>
            <button onClick={handleNumber} id="multiply">*</button> 
          </div>
          <div class="cal-col">
            <button onClick={handleNumber} id="one">1</button>
            <button onClick={handleNumber} id="two">2</button>
            <button onClick={handleNumber} id="three">3</button>
            <button onClick={handleNumber} id="subtract">-</button>
            <button onClick={handleNumber} id="add">+</button>
          </div>
          <div className="cal-col">
            <button onClick={handleNumber} id="four">4</button>
            <button onClick={handleNumber} id="five">5</button>
            <button onClick={handleNumber} id="six">6</button>
            <button onClick={handleNumber} id="decimal">.</button>
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