import { html } from '../../lib/htm-preact.js'; // Import html from htm-preact
const { useState, useRef } = window.Preact; // Access hooks from the global Preact object
import SButton from '../Button/SButton.js'; // Updated Button Component

const Scientific = (props) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const letsChange = () => {
    setToggle(!toggle);
  };

  return html`
    <style>
    .scientific-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
  }
  
  .scientific-toggle {
    background-color: #b36200;
    border: none;
    border-radius: 10px;
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .scientific-toggle:hover {
    background-color: #944b00;
  }
  
  .menu-icon {
    color: white;
    font-size: 24px;
  }
  
  .container-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
    width: 400px; /* Adjust the container size */
    margin-top: 10px;
  }
  
  button {
    font-size: 18px;
    text-align: center;
    border-radius: 8px;
    padding: 10px;
  }
    </style>
    <div class="scientific-container">
      <button
        class="scientific-toggle btn btn-light"
        onClick=${() => setShouldShow(!shouldShow)}
      >
        <i class="fas fa-calculator menu-icon"></i>
      </button>

      ${shouldShow &&
      html`
        <div class="container-buttons">
          <${SButton}
            label=${toggle ? "...." : "⁞"}
            onClick=${letsChange}
          />
          <${SButton}
            label="acos"
            onClick=${() => props.onOperator("acos")}
          />
          <${SButton}
            label="asin"
            onClick=${() => props.onOperator("asin")}
          />
          <${SButton}
            label="atan"
            onClick=${() => props.onOperator("atan")}
          />
          <${SButton}
            label=${toggle ? "log" : "ln"}
            onClick=${() => props.onOperator(toggle ? "log" : "ln")}
          />
          <${SButton}
            label=${toggle ? "xʸ" : "!"}
            onClick=${() => props.onOperator(toggle ? "xʸ" : "!")}
          />
          <${SButton}
            label=${toggle ? "π" : "%"}
            onClick=${() => props.onOperator(toggle ? "π" : "%")}
          />
          <${SButton}
            label=${toggle ? "cosh" : "cos"}
            onClick=${() => props.onOperator(toggle ? "cosh" : "cos")}
          />
          <${SButton}
            label=${toggle ? "sinh" : "sin"}
            onClick=${() => props.onOperator(toggle ? "sinh" : "sin")}
          />
          <${SButton}
            label=${toggle ? "tanh" : "tan"}
            onClick=${() => props.onOperator(toggle ? "tanh" : "tan")}
          />
          <${SButton}
            label=${toggle ? "x³" : "x²"}
            onClick=${() => props.onOperator(toggle ? "x³" : "x²")}
          />
          <${SButton}
            label=${toggle ? "³√" : "√"}
            onClick=${() => props.onOperator(toggle ? "³√" : "√")}
          />
        </div>
      `}
    </div>
  `;
};

export default Scientific;
