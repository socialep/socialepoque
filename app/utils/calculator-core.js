
export function evaluate(arrFormula) {
  const arrPostfix = infix2Postfix(arrFormula);
  return evaluatePostfix(arrPostfix);
}

export function isNotNumber(input) {
  return (
    input === '(' ||
    input === ')' ||
    input === '+' ||
    input === '-' ||
    input === '*' ||
    input === '/' ||
    input === '%' ||
    input === 'cos' ||
    input === 'sin' ||
    input === 'tan' ||
    input === 'π' ||
    input === 'e' ||
    input === 'log' ||
    input === '/10' ||
    input === '=x; xʸ; y=' ||
    input === '³' ||
    input === '²' ||
    input === '√' ||
    input === '=x; y√x; y=' ||
    input === '10ʸ' ||
    input === 'In' ||
    input === '!' ||
    input === '³√' ||
    input === 'asin'||
    input === 'sinh' ||
    input === 'acos' ||
    input === 'cosh' ||
    input === 'atan' ||
    input === 'tanh' ||
    input === 'eʸ' ||
    input === '|x|' ||
    input === '2ʸ'
  );
}

export function isNumber(input) {
  return !isNotNumber(input);
}

export function isOperator(input) {
  return (
    input === '+' ||
    input === '-' ||
    input === '*' ||
    input === '/' ||
    input === '%' ||
    input === 'cos' ||
    input === 'sin' ||
    input === 'tan' ||
    input === 'π' ||
    input === 'e' ||
    input === 'log' ||
    input === '/10' ||
    input === '=x; xʸ; y=' ||
    input === '³' ||
    input === '²' ||
    input === '√' ||
    input === '=x; y√x; y=' ||
    input === '10ʸ' ||
    input === 'In' ||
    input === '!' ||
    input === '³√'||
    input === 'asin'||
    input === 'sinh'||
    input === 'acos' ||
    input === 'cosh' ||
    input === 'atan' ||
    input === 'tanh' ||
    input === 'eʸ' ||
    input === '|x|' ||
    input === '2ʸ'

  );
}

export function factorial(n) {
  if (n < 0) return NaN; // Factorial is undefined for negative numbers
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}


export function getPriority(input) {
  if (input === '+' || input === '-') {
    return 1;
  } else if (input === '*' || input === '/' || input === '%') {
    return 2;
  }
  return 0;
}

export function infix2Postfix(arrFormula) {
  let result = [],
    stack = [];

  arrFormula.forEach((item) => {
    if (isNumber(item)) {
      result.push(item);
    } else if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      while (stack.length > 0) {
        const pulledItem = stack.pop();

        if (pulledItem === '(') {
          break;
        } else {
          result.push(pulledItem);
        }
      }
    } else if (isOperator(item)) {
      while (stack.length > 0) {
        const peekedItem = stack[stack.length - 1];

        if (
          isOperator(peekedItem) &&
          getPriority(peekedItem) >= getPriority(item)
        ) {
          result.push(peekedItem);
          stack.pop();
        } else {
          break;
        }
      }

      stack.push(item);
    } else {
      console.log('Something else!!!');
    }
  });

  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result;
}

export function evaluatePostfix(arrPostfix) {
  let stack = [];

  arrPostfix.forEach((item) => {
    if (isNumber(item)) {
      stack.push(item);
    } else if (isOperator(item)) {
      const num1 = Number.parseFloat(stack.pop()),
        num2 = Number.parseFloat(stack.pop());
      let result = '';

      if (item === '-' && isNaN(num1) && stack.length === 0) {
        num1 = -num1; // Make negative if "-" is the first digit
      } 

      switch (item) {
        case '+':
          result = num2 + num1;
          break;
        case '-':
          result = num2 - num1;
          break;
        case '*':
          result = num2 * num1;
          break;
        case '/':
          result = num2 / num1;
          break;
        case '%':
          result = num2 * num1/ 100 || num1/100;
          break;
          case 'cos':
            result = num2 * Math.cos(num1) ||  Math.cos(num1);
            break;
            case 'log':
            result = num2 * Math.log10(num1) ||  Math.log10(num1);
            break;          
            case 'sin':
              result = num2 * Math.sin(num1) ||  Math.sin(num1);
              break;
        case 'tan':
          result = num2 * Math.tan(num1) ||  Math.tan(num1) ;
          break;
        case 'π':
          result = num1 * Math.PI || num2 * Math.PI  ;
          break;
          case 'e':
            const E = 2.71828182846; // Explicitly define the value of e
            if (isNaN(num1) && isNaN(num2)) {
              // No numbers provided; default result to 0
              result = 0;
            } else if (isNaN(num2)) {
              // num2 is provided; multiply num2 by e
              result = num1 * E ;
            } else if (!isNaN(num2)){
              // Only e is used
              result = num2 * E * num1;
            }
            break;          
        case 'In':
          result = num2 * Math.log(num1) || Math.log(num1) ;
          break;
        case '/10':
          result = num1/10;
          break;
        case '²':
            if (isNaN(num1) && isNaN(num2)) {
    // No numbers have been provided yet; default result to 0
    result = 0;
  } else if (isNaN(num2)) {
    // Only num2 is provided; square num2
    result = Math.pow(num1, 2);
  } else if (!isNaN(num2)) {
    // Both num2 and num1 are provided; square num2 and multiply by num1
    result = Math.pow(num2, 2) * num1;
  }
          break;
        case '³':
          result = Math.pow(num1, 3) || num2 * Math.pow(num1, 3)  ;
          break;
        case '√':
          result = num2 * Math.sqrt(num1) || Math.cbrt(num1) ;
          break;
        case '³√':
          result = Math.cbrt(num1) || num2 * Math.cbrt(num1);
          break;
        case '10ʸ':
          result = num2 * Math.pow(10, num1)|| Math.pow(10, num1) ;
          break;
          case 'asin':
            if (num1 >= -1 && num1 <= 1){
              result = num2 * Math.asin(num1) ||  Math.asin(num1) ;
            } else{
              result = 11223344556677889900 ;
            }       
          case 'sinh':
          result = num2 * Math.sinh(num1) ||  Math.sinh(num1) ;
          break;
          case 'cosh':
          result = num2 * Math.cosh(num1) ||  Math.cosh(num1) ;
          break;
          case 'acos':
            if (num1 >= -1 && num1 <= 1){
              result = num2 * Math.acos(num1) ||  Math.acos(num1) ;
            } else{
              result = 11223344556677889900 ;
            }
            break;
          case 'atan':
          result = num2 * Math.atan(num1) ||  Math.atan(num1)
          break;
          case 'tanh':
          result = num2 * Math.tanh(num1) ||  Math.tanh(num1)
          break;
          case 'eʸ':
          result = num2 *  Math.exp(num1) || Math.exp(num1)  ;
          break;
          case '|x|':
          result = Math.abs(num1) || num2 *  Math.abs(num1) ;
          break;
          case '=x; xʸ; y=':
            if (isNaN(num1) || isNaN(num2)){
              result = 11223344556677889900;
            } else{
              result = Math.pow(num2, num1) ;
            }
          break;
          case '=x; y√x; y=':
            if (isNaN(num1) || isNaN(num2)){
              result = 11223344556677889900;
            } else{
              result = Math.pow(num2, 1 / num1) ;
            }
            break;
            case '!':
              if (isNaN(num1) && isNaN(num2)) {
                // No numbers have been provided yet; default result to 0
                result = 0;
              } else if (isNaN(num2)) {
                // Only num2 is provided; square num2
                result = factorial(num1);
              } else if (!isNaN(num2)) {
                // Both num2 and num1 are provided; square num2 and multiply by num1
                result = factorial(num1) * num2;
              }
              break;               
        case '2ʸ':
        result = Math.pow(2, num2) || num1 *  Math.pow(2, num2)  ;
          break;
        default:
          console.log('Something else!!!');
      }

      stack.push(result + '');
    } else {
      console.log('Something else!!!');
    }
  });

  return Number.parseFloat(stack[0]);
}