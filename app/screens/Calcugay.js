

import { html, Component } from '../lib/htm-preact.js';

// Components
import Screen from '../components/Screen/Screen.js';
import Numpad from '../components/Numpad/Numpad.js';
import History from '../components/History/History.js';

// Utils
import * as Calculator from '../utils/calculator-core.js';


class Calcugay extends Component {
  constructor() {
    super();
    // Initial state
    this.state = {
      formula: [],
      history: [],
      input: '',
      afterCalculation: false,
    };
    this.localHistorico = "localHistorico";
  }

  saveMyHistory = (history) => {
    const userId = this.getUserId(); // Get the current user's unique ID
    localStorage.setItem(`${this.localHistorico}_${userId}`, JSON.stringify(history));
  };
  
  readMyHistory = () => {
    const userId = this.getUserId(); // Get the current user's unique ID
    const savedHistory = localStorage.getItem(`${this.localHistorico}_${userId}`);
    this.setState({ history: JSON.parse(savedHistory || "[]") });
  };
  
  getUserId = () => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = `user_${Date.now()}`;
      localStorage.setItem('userId', userId);
    }
    return userId;
  };

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
      input: '',
      afterCalculation: false,
    });
  };
  
    // Handle parentheses
    onParenthesis = (parenthesis) => {
      const { input, formula } = this.state;
  
      if (parenthesis === '(') {
        if (
          (Calculator.isNumber(input) && input !== '0') ||
          (Calculator.isNumber(input) && input === '0' && formula.length > 0) ||
          input === ')'
        ) {
          this.setState({
            input: parenthesis,
            formula: [...formula, input, '*'],
            afterCalculation: false,
          });
        } else if (Calculator.isOperator(input) || input === '(') {
          this.setState({
            input: parenthesis,
            formula: [...formula, input],
            afterCalculation: false,
          });
        } else if (
          Calculator.isNumber(input) &&
          input === '0' &&
          formula.length === 0
        ) {
          this.setState({ input: parenthesis, afterCalculation: false });
        }
      } else {
        const arrayOpenParenthesis = formula.join('').match(/\(/g);
        const numOpenParenthesis = arrayOpenParenthesis
          ? arrayOpenParenthesis.length
          : 0;
  
        const arrayCloseParenthesis = formula.join('').match(/\)/g);
        const numCloseParenthesis = arrayCloseParenthesis
          ? arrayCloseParenthesis.length
          : 0;
  
        if (
          (Calculator.isNumber(input) || input === ')') &&
          numOpenParenthesis > 0 &&
          numOpenParenthesis > numCloseParenthesis
        ) {
          this.setState({
            input: parenthesis,
            formula: [...formula, input],
            afterCalculation: false,
          });
        }
      }
    };

    // Handle decimal points
onDecimal = (decimal) => {
  const { input, formula, afterCalculation } = this.state;

  if (afterCalculation) {
    this.setState({
      input: `0${decimal}`,
      afterCalculation: false,
    });
  } else if (Calculator.isNotNumber(input)) {
    this.setState({
      input: `0${decimal}`,
      formula: [...formula, input],
    });
  } else if (!input.includes(decimal)) {
    this.setState({
      input: input + decimal,
    });
  }
};


onEqual = () => {
  let finalFormula = this.state.formula.concat(this.state.input);

  // Handle negative sign at the beginning of the formula
  if (finalFormula[0] === "-" && finalFormula.length > 1) {
    finalFormula = ["0"].concat(finalFormula);
  }

  const lastOperator = finalFormula[finalFormula.length - 1];
  if (
    Calculator.isOperator(lastOperator) &&
    lastOperator !== "!" &&
    lastOperator !== "e" &&
    lastOperator !== "π" &&
    lastOperator !== "²" &&
    lastOperator !== "³" &&
    lastOperator !== "%"
  ) {
    this.setState({
      input: "Error",
      formula: [],
      afterCalculation: true,
    });
    return; // Exit the function
  }

  const result = Calculator.evaluate(finalFormula);
  const lastOperatorInFormula = finalFormula[finalFormula.length - 2]; // Get the operation before the last input

  // Check if the last operator is 'acos' or 'asin' and the result is 11223344556677889900
  if ((lastOperatorInFormula === 'acos' || lastOperatorInFormula === 'asin') && result === 11223344556677889900) {
    this.setState({
      input: "Error", // Display the error message instead of 11223344556677889900
      formula: [],
      afterCalculation: true,
    });
  } else if (!Number.isNaN(result)) {
    const newHistoryItem = {
      formula: finalFormula,
      result: result,
    };

    this.setState((prevState) => ({
      input: result + "",
      formula: [],
      history: [newHistoryItem, ...prevState.history],
      afterCalculation: true,
    }), () => {
      this.saveMyHistory(this.state.history);
    });
  }
};

componentDidMount() {
  this.readMyHistory();
}


onClearHistory = () => {
  try {
    const userId = this.getUserId();
    const key = `${this.localHistorico}_${userId}`;
    console.log('Clearing key:', key); // Log the key
    localStorage.removeItem(key);
    this.setState({ history: [] }, () => {
      console.log('History cleared. Current state:', this.state.history);
    });
  } catch (error) {
    console.error('Error clearing history:', error);
  }
};

onHistoryItemClicked = ({ target }) => {
  const number = target.getAttribute("value");

  this.setState((prevState) => {
    if (Calculator.isNumber(prevState.input)) {
      return { input: number };
    } else {
      return {
        input: number,
        formula: prevState.formula.concat(prevState.input),
      };
    }
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
        .calcugay-container-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background-image: url('../assets/lgbtcase.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          margin-top: -5rem;
          border-radius: 1rem;
        }
  
        .calcugay-content {
          display: flex;
          flex-direction: row; /* Arrange history and numpad side by side */
          gap: 2rem; /* Add space between the components */
          align-items: flex-start; /* Align items to the top */
        }
  
        .history-container {
          flex: 1;
          max-width: 300px; /* Adjust width as needed */
          overflow-y: auto; /* Enable scrolling if content overflows */
        }
  
        .numpad-container {
          flex: 2;
          display: flex;
          flex-direction: column;
        }

            .screen-container {
          margin-top: 20px;
          margin-left: -20px;
        }


      @media (min-width: 992px) {
               .history{
          margin-top: 75px;
          }
        }

        @media (max-width: 992px) {
          .calcugay-content {
            flex-direction: column; /* Stack components vertically on smaller screens */
            align-items: center;
          }
                  .history{
          margin-top: -20px;
          }
        }
      </style>
  
        <div class="calcugay-container-main">
      <div class="screen-container">
        <${Screen} formula=${formula} input=${input} />
                    <div class="history">
               <${History}
              history=${this.state.history}
              onHistoryItemClicked=${this.onHistoryItemClicked}
              onEqual=${this.onEqual}
              onClearHistory=${this.onClearHistory}
            />
        </div>
      </div>

      <div class="calcugay-content">
        <div class="numpad-container">
          <${Numpad}
            onClear=${this.onClear}
            onEqual=${this.onEqual}
            onDigit=${this.onDigit}
            onDecimal=${this.onDecimal}
            onParenthesis=${this.onParenthesis}
            onOperator=${this.onOperator}
            onBackspace=${this.onBackspace}
          />
        </div>
      </div>
    </div>
    `;
  }  
}

export default Calcugay;
