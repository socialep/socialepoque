import { html, useState, useEffect } from '../../lib/htm-preact.js'; // Import hooks and html from htm-preact

// Custom Buttons (import these components as needed)
import Button from "../Button/Button.js";
import WhiteLabel from "../Button/WhiteLabel.js";
import RedButton from "../Button/RedButton.js";
import GreenButton from "../Button/GreenButton.js";
import Erase from "../Erase/Erase.js";
import WhiteLabelToggle from '../Button/WhiteLabelToggle.js';

const Numpad = ({ onClear, onParenthesis, onBackspace, onDigit, onDecimal, onEqual, onOperator }) => {
  const [input, setInput] = useState("");
  const [formula, setFormula] = useState([]);
  const [toggle, setToggle] = useState(false);

  // Hook to handle keyboard events
  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key;

      // Handle number keys
      if (key >= '0' && key <= '9') {
        // Update input and formula
        onDigit(key);  // Trigger the onDigit function to update state
      }
      
      // Handle operators (including decimal point)
      else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '=' || key === 'Enter') {
        if (key === '=' || key === 'Enter') {
          onEqual(); // Trigger equal button action
        } else {
          onOperator(key); // Trigger operator function to update state
        }
      }
      
      // Handle backspace
      else if (key === 'Backspace') {
        onBackspace(); // Trigger backspace logic
      }
      
      // Handle parenthesis
      else if (key === '(' || key === ')') {
        onParenthesis(key); // Trigger parenthesis logic
      }

      // Handle more operations
      else if (key === 'c') {
        onOperator('cos'); 
       }
       else if (key === 's') {
        onOperator('sin'); 
       }
       else if (key === 't') {
        onOperator('tan'); 
       }
       else if (key === '%') {
        onOperator('%'); 
       }
       else if (key === '!') {
        onOperator('!'); 
       }
       else if (key === '√') {
        onOperator('√'); 
       }
       else if (key === 'e') {
        onOperator('e'); 
       }
       else if (key === 'p') {
        onOperator('π'); 
       }
       else if (key === 'g') {
        onOperator('log'); 
       }
       else if (key === 'l') {
        onOperator('In'); 
       }
       else if (key === '.') {
        onDecimal(key); // Trigger the decimal logic
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener when component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onDigit, onOperator, onEqual, onBackspace, onParenthesis, onDecimal]);

  // Method to toggle the scientific mode or any functionality
  const letsChange = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return html`
    <style>
      .container-wrapper {
        display: flex;
        gap: 1rem;
        align-items: flex-start;
        margin-top: -0.5rem;
      }

      .container-sencos {
        display: grid;
        gap: 2.5rem;
        margin-top: 1rem;
        margin-right: 2rem;
      }

      .container-buttons {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5rem;
        margin-top: 1rem;
      }

      button {
        width: 60px;
        height: 60px;
        font-size: 18px;
        border-radius: 8px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    </style>
    <div class="container-wrapper">
      <div class="container-sencos">
        <${WhiteLabelToggle} label=${toggle ? "Inv" : "Inv"} onClick=${letsChange} />
        <${WhiteLabel} label=${toggle ? "acos" : "cos"} onClick=${() => onOperator(toggle ? "acos" : "cos")} />
        <${WhiteLabel} label=${toggle ? "asin" : "sin"} onClick=${() => onOperator(toggle ? "asin" : "sin")} />
        <${WhiteLabel} label=${toggle ? "atan" : "tan"} onClick=${() => onOperator(toggle ? "atan" : "tan")} />
        <${WhiteLabel} label=${toggle ? "10ʸ" : "log"} onClick=${() => onOperator(toggle ? "10ʸ" : "log")} />
        <${WhiteLabel} label=${toggle ? "eʸ" : "In"} onClick=${() => onOperator(toggle ? "eʸ" : "In")} />
      </div>
      <div class="container-buttons">
        <${RedButton} label="C" onClick=${onClear} />
        <${WhiteLabel} label="(" onClick=${() => onParenthesis("(")} />
        <${WhiteLabel} label=")" onClick=${() => onParenthesis(")")} />
        <${Erase} onClick=${onBackspace} />
        <${WhiteLabel} label=${toggle ? "!" : "e"} onClick=${() => onOperator(toggle ? "!" : "e")} />
        <${WhiteLabel} label=${toggle ? "π" : "%"} onClick=${() => onOperator(toggle ? "π" : "%")} />
        <${WhiteLabel} label=${toggle ? "√" : "x²"} onClick=${() => onOperator(toggle ? "√" : "²")} />
        <${WhiteLabel} label=${toggle ? "y√x" : "xʸ"} onClick=${() => onOperator(toggle ? "=x; y√x; y=" : "=x; xʸ; y=")} />
        <${Button} label="7" onClick=${() => onDigit("7")} />
        <${Button} label="8" onClick=${() => onDigit("8")} />
        <${Button} label="9" onClick=${() => onDigit("9")} />
        <${WhiteLabel} label="÷" onClick=${() => onOperator("/")} />
        <${Button} label="4" onClick=${() => onDigit("4")} />
        <${Button} label="5" onClick=${() => onDigit("5")} />
        <${Button} label="6" onClick=${() => onDigit("6")} />
        <${WhiteLabel} label="✕" onClick=${() => onOperator("*")} />
        <${Button} label="1" onClick=${() => onDigit("1")} />
        <${Button} label="2" onClick=${() => onDigit("2")} />
        <${Button} label="3" onClick=${() => onDigit("3")} />
        <${WhiteLabel} label="−" onClick=${() => onOperator("-")} />
        <${Button} label="0" onClick=${() => onDigit("0")} />
        <${Button} label="." onClick=${() => onDecimal(".")} />
        <${GreenButton} label="=" onClick=${onEqual} />
        <${WhiteLabel} label="+" onClick=${() => onOperator("+")} />
      </div>
    </div>
  `;
};

export default Numpad;
