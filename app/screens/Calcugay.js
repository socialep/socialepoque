

import { html, Component } from '../lib/htm-preact.js';

// Components
import Screen from '../components/Screen/Screen.js';
import Numpad from '../components/Numpad/Numpad.js';

// Utils
import * as Calculator from '../utils/calculator-core.js';

class Calcugay extends Component {
  constructor() {
    super();
    // Initial state
    this.state = {
      formula: [],
      input: '0',
      afterCalculation: false,
    };
  }

  // Handle digits
  onDigit = (digit) => {
    const { input, afterCalculation, formula } = this.state;

    if (afterCalculation) {
      this.setState({ input: digit, afterCalculation: false });
    } else if (input === '0') {
      this.setState({ input: digit });
    } else if (Calculator.isNotNumber(input)) {
      this.setState({
        input: digit,
        formula: [...formula, input],
      });
    } else {
      this.setState({ input: input + digit });
    }
  };

  // Handle operators
  onOperator = (operator) => {
    const { input, formula } = this.state;

    if (input === '0' && operator === '-') {
      this.setState({ input: '-' });
    } else if (input === '0' && Calculator.isNotNumber(input)) {
      this.setState({
        input: operator,
        formula: [...formula, input],
      });
    } else {
      this.setState({
        formula: [...formula, input],
        input: operator,
      });
    }
  };

  // Clear function
  onClear = () => {
    this.setState({
      formula: [],
      input: '0',
      afterCalculation: false,
    });
  };

  // Equal function
  onEqual = () => {
    const { formula, input } = this.state;
    const finalFormula = [...formula, input];
    const result = Calculator.evaluate(finalFormula);

    this.setState({
      formula: [],
      input: result.toString(),
      afterCalculation: true,
    });
  };

  // Backspace function
  onBackspace = () => {
    const { input, formula } = this.state;

    if (['Infinity', '-Infinity', 'NaN'].includes(input)) {
      this.setState({ input: '0', afterCalculation: false });
    } else if (formula.length > 0) {
      const lastFormulaInput = formula[formula.length - 1];
      this.setState({
        input: lastFormulaInput,
        formula: formula.slice(0, -1),
      });
    } else if (input.length > 1) {
      this.setState({ input: input.slice(0, -1) });
    } else {
      this.setState({ input: '0' });
    }
  };

  render() {
    const { formula, input } = this.state;

    return html`
        <style>
        .about-content {
            display: block;
        }
        .calcugay-container-main {
          display: flex;
          borderRadius: "10%";
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-image: url('../assets/lgbtcase.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .about-content img.image {
            width: 150px;
            border: 0;
            vertical-align: middle;
            float: left;
            margin-right: 2rem;
        }

        .info-title {
            margin: 30px 0 20px;
            font-size: 3.8rem;
            font-weight: 700;
            line-height: 1.1;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
        }

        .info p {
            font-size: 2rem;
            margin: 0 0 30px;
        }

        footer {
            padding: 10px 0;
            font-size: 1.4rem;
            letter-spacing: 1px;
            font-weight: 700;
            font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
            text-transform: uppercase;
        }

        footer a.contact {
            text-decoration: none;
            background-color: transparent;
            color: #999;
            border-bottom: none;
            font-size: 1.4rem;
        }

        footer a.contact:hover {
            text-decoration: none;
            background-color: transparent;
            color: #333;
            outline: 0;
            transition: all 0.4s;
            border-bottom: none;
        }
        termsofuse {
            margin-left: 20px;
        }
        
    </style>
      <div class="calcugay-container-main">
        <${Screen} formula=${formula} input=${input} />
        <${Numpad}
          onClear=${this.onClear}
          onEqual=${this.onEqual}
          onDigit=${this.onDigit}
          onOperator=${this.onOperator}
          onBackspace=${this.onBackspace}
        />
      </div>
    `;
  }
}

export default Calcugay;
