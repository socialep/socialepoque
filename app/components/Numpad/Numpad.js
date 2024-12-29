import { html, Component } from '../../lib/htm-preact.js'; // Import html and Component from htm-preact

// Custom Buttons (import these components as needed)
import Button from "../Button/Button.js";
import WhiteLabel from "../Button/WhiteLabel.js";
import RedButton from "../Button/RedButton.js";
import GreenButton from "../Button/GreenButton.js";
import Erase from "../Erase/Erase.js";
import WhiteLabelToggle from '../Button/WhiteLabelToggle.js';


class Numpad extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
      toggle: false,
    };
  }

  // Method to toggle the scientific mode or any functionality
  letsChange = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
    const changeScientific = { toggle: this.state.toggle };
    console.log("Scientific mode toggled:", changeScientific);
  };

  render() {
    const { onClear, onParenthesis, onBackspace, onDigit, onDecimal, onEqual, onOperator } = this.props;
    const { shouldShow, toggle } = this.state;

    return html`
    <style>

      .container-wrapper {
        display: flex; /* Use flexbox layout for side-by-side alignment */
        gap: 1rem; /* Space between the two containers */
        align-items: flex-start; /* Align items at the top */
        margin-top: -0.5rem;
      }
  
      .container-sencos {
        display: grid; /* Use grid layout for buttons */
        gap: 2.5rem; /* Space between buttons */
        margin-top: 1rem;
        margin-right: 2rem;
      }
  
      .container-buttons {
        display: grid; /* Use grid layout for buttons */
        grid-template-columns: repeat(4, 1fr); /* Four columns */
        gap: 2.5rem; /* Space between buttons */
        margin-top: 1rem;
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
    <div class="container-wrapper">
      <div class="container-sencos">
        <${WhiteLabelToggle} label=${toggle ? "Inv" : "Inv"} onClick=${this.letsChange} />
        <${WhiteLabel} label=${toggle ? "cosh" : "cos"} onClick=${() => onOperator(toggle ? "cosh" : "cos")} />
        <${WhiteLabel} label=${toggle ? "sinh" : "sin"} onClick=${() => onOperator(toggle ? "sinh" : "sin")} />
        <${WhiteLabel} label=${toggle ? "tanh" : "tan"} onClick=${() => onOperator(toggle ? "tanh" : "tan")} />
        <${WhiteLabel} label=${toggle ? "10ʸ" : "log"} onClick=${() => onOperator(toggle ? "10ʸ" : "log")} />
        <${WhiteLabel} label=${toggle ? "eʸ" : "In"} onClick=${() => onOperator(toggle ? "eʸ" : "In")} />
      </div>
      <div class="container-buttons">
        <${RedButton} label="C" onClick=${onClear} />
        <${WhiteLabel} label="(" onClick=${() => onParenthesis("(")} />
        <${WhiteLabel} label=")" onClick=${() => onParenthesis(")")} />
        <${Erase} onClick=${onBackspace} />
        <${WhiteLabel} label=${toggle ? "acos" : "asin"} onClick=${() => onOperator(toggle ? "acos" : "asin")} />
        <${WhiteLabel} label=${toggle ? "π" : "%"} onClick=${() => onOperator(toggle ? "π" : "%")} />
        <${WhiteLabel} label=${toggle ? "√" : "x²"} onClick=${() => onOperator(toggle ? "√" : "²")} />
        <${WhiteLabel} label=${toggle ? "y√x" : "xʸ"} onClick=${() => onOperator(toggle ? "y√x" : "xʸ")} />
        <${Button} label="7" onClick=${() => onDigit("7")} />
        <${Button} label="8" onClick=${() => onDigit("8")} />
        <${Button} label="9" onClick=${() => onDigit("9")} />
        <${WhiteLabel} label=${toggle ? "e" : "÷"} onClick=${() => onOperator(toggle ? "e" : "/")} />
        <${Button} label="4" onClick=${() => onDigit("4")} />
        <${Button} label="5" onClick=${() => onDigit("5")} />
        <${Button} label="6" onClick=${() => onDigit("6")} />
        <${WhiteLabel} label=${toggle ? "!" : "✕"} onClick=${() => onOperator(toggle ? "!" : "*")} />
        <${Button} label="1" onClick=${() => onDigit("1")} />
        <${Button} label="2" onClick=${() => onDigit("2")} />
        <${Button} label="3" onClick=${() => onDigit("3")} />
        <${WhiteLabel} label=${toggle ? "atan" : "−"} onClick=${() => onOperator(toggle ? "atan" : "-")} />
        <${Button} label="0" onClick=${() => onDigit("0")} />
        <${Button} label="." onClick=${() => onDecimal(".")} />
        <${GreenButton} label="=" onClick=${onEqual} />
        <${WhiteLabel} label="+" onClick=${() => onOperator("+")} />
      </div>
    </div>
  `;
  
  }
}

export default Numpad;
