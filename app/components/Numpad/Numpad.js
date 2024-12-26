import { html, Component } from '../../lib/htm-preact.js'; // Import html and Component from htm-preact

// Custom Buttons (import these components as needed)
import Button from "../Button/Button.js";
import WhiteLabel from "../Button/WhiteLabel.js";
import RedButton from "../Button/RedButton.js";
import GreenButton from "../Button/GreenButton.js";
import Erase from "../Erase/Erase.js";

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
        .container-buttons {
          display: grid; /* Use grid layout for buttons */
          grid-template-columns: repeat(4, 1fr); /* 4 columns with equal width */
          gap: 4rem; /* Space between buttons */
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
      <div class="container-buttons">
                  <${RedButton} label="C" onClick=${onClear} />


        <${WhiteLabel} label="(" onClick=${() => onParenthesis("(")} />
        <${WhiteLabel} label=")" onClick=${() => onParenthesis(")")} />
        <${Erase} onClick=${onBackspace} />   
        <${WhiteLabel} label=${toggle ? "...." : "⁞"} onClick=${this.letsChange} />
        <${WhiteLabel} label=${toggle ? "π" : "%"}  onClick=${() => onOperator(toggle ? "π" : "%")} />
        <${WhiteLabel} label=${toggle ? "³√" : "√"}  onClick=${() => onOperator(toggle ? "³√" : "√")} />
        <${WhiteLabel} label=${toggle ? "x³" : "x²"}  onClick=${() => onOperator(toggle ? "³" : "²")} />
        <${Button} label="7" onClick=${() => onDigit("7")} />
        <${Button} label="8" onClick=${() => onDigit("8")} />
        <${Button} label="9" onClick=${() => onDigit("9")} />
        <${WhiteLabel} label=${toggle ? "log" : "÷"}  onClick=${() => onOperator(toggle ? "log" : "/")} />
        <${Button} label="4" onClick=${() => onDigit("4")} />
        <${Button} label="5" onClick=${() => onDigit("5")} />
        <${Button} label="6" onClick=${() => onDigit("6")} />
        <${WhiteLabel} label=${toggle ? "In" : "X"}  onClick=${() => onOperator(toggle ? "In" : "*")} />
        <${Button} label="1" onClick=${() => onDigit("1")} />
        <${Button} label="2" onClick=${() => onDigit("2")} />
        <${Button} label="3" onClick=${() => onDigit("3")} />
        <${WhiteLabel} label=${toggle ? "xʸ" : "-"}  onClick=${() => onOperator(toggle ? "=x (xʸ) y=" : "-")} />
        <${Button} label="0" onClick=${() => onDigit("0")} />
        <${Button} label="." onClick=${() => onDecimal(".")} />
        <${GreenButton} label="=" onClick=${onEqual} />
        <${WhiteLabel} label=${toggle ? "!" : "+"}  onClick=${() => onOperator(toggle ? "!" : "+")} />
      </div>
    `;
  }
}

export default Numpad;
