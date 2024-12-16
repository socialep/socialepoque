import { html } from '../../lib/htm-preact.js'; // Import html from htm-preact

// Custom Buttons (import these components as needed)
import Button from "../Button/Button.js";
import WhiteLabel from "../Button/WhiteLabel.js";
import RedButton from "../Button/RedButton.js";
import GreenButton from "../Button/GreenButton.js";
import Erase from "../Erase/Erase.js";

const Numpad = ({ onClear, onParenthesis, onBackspace, onDigit, onDecimal, onEqual, onOperator }) => {
  return html`
  <style>
  .container-buttons {
    display: grid; /* Use grid layout for buttons */
    grid-template-columns: repeat(4, 1fr); /* 4 columns with equal width */
    gap: 4rem; /* Space between buttons */
    margin: 20px; /* Adjust margins as needed */
    margin-bottom: 20px
  }

  button {
    width: 60px; /* Adjust button sizes */
    height: 60px;
    font-size: 18px;
    border-radius: 8px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
    <div class="container-buttons">
      <${RedButton} label="C" onClick=${onClear} />
      <${WhiteLabel} label="(" onClick=${() => onParenthesis("(")} />
      <${WhiteLabel} label=")" onClick=${() => onParenthesis(")")} />
      <${Erase} onClick=${onBackspace} />
      <${Button} label="7" onClick=${() => onDigit("7")} />
      <${Button} label="8" onClick=${() => onDigit("8")} />
      <${Button} label="9" onClick=${() => onDigit("9")} />
      <${WhiteLabel} label="÷" onClick=${() => onOperator("/")} />
      <${Button} label="4" onClick=${() => onDigit("4")} />
      <${Button} label="5" onClick=${() => onDigit("5")} />
      <${Button} label="6" onClick=${() => onDigit("6")} />
      <${WhiteLabel} label="x" onClick=${() => onOperator("*")} />
      <${Button} label="1" onClick=${() => onDigit("1")} />
      <${Button} label="2" onClick=${() => onDigit("2")} />
      <${Button} label="3" onClick=${() => onDigit("3")} />
      <${WhiteLabel} label="-" onClick=${() => onOperator("-")} />
      <${Button} label="0" onClick=${() => onDigit("0")} />
      <${Button} label="." onClick=${() => onDecimal(".")} />
      <${GreenButton} label="=" onClick=${onEqual} />
      <${WhiteLabel} label="+" onClick=${() => onOperator("+")} />
    </div>
  `;
};

export default Numpad;
