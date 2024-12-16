

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
    input === '' ||
    input === '³' ||
    input === '²' ||
    input === '√' ||
    input === '10ʸ' ||
    input === 'In' ||
    input === '!' ||
    input === '³√'||
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
    input === '' ||
    input === '³' ||
    input === '²' ||
    input === '√' ||
    input === '10ʸ' ||
    input === 'In' ||
    input === '!' ||
    input ===  '³√'||
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
      if (item === 'cos') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.cos(num1).toFixed(10);

        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.sin(num1)).toFixed(10);
        }
        stack.push(result);
      } else if (item === 'sin') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.sin(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.sin(num1)).toFixed(10);
        }
        stack.push(result);

      } else if (item === 'tan') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.tan(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.tan(num1)).toFixed(10);
        }
        stack.push(result);

      } else if (item === 'log') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.log10(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num1 * Math.log10(num2)).toFixed(10);
        }
        stack.push(result);

      }  else if (item === '%') {
        const num1 = Number.parseFloat(stack.pop());
        let result = num1 /100;
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = num2 * num1/100;
        }
        stack.push(result);

      } else if (item === '!') {
        if (num1 === 0 || num1 === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num1; i++) {
          result *= i;
        }
        stack.push(result);

      } else if (item === '²') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.pow(num1, 2);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = num2 * Math.pow(num1, 2) ;
        }
        stack.push(result);

      } else if (item === '³') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.pow(num1, 3) ;
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = num2 * Math.pow(num1, 3) ;
        }
        stack.push(result);

      } else if (item === 'cosh') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.cosh(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.cosh(num1)).toFixed(10);
        }
        stack.push(result);

      } else if (item === 'sinh') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.sinh(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.sinh(num1)).toFixed(10);
        }
        stack.push(result);

      } else if (item === 'tanh') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.tanh(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.tanh(num1)).toFixed(10);
        }
        stack.push(result);

      } else if (item === 'π') {
        const num1 = Number.parseFloat(stack.pop());
        let result = num1 * Math.PI;
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = num1 * Math.PI * num2  ;
        }
        stack.push(result);

      } else if (item === '³√') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.cbrt(num1) ;
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result =  num2 * Math.cbrt(num1);
        }
        stack.push(result);

      } else if (item === '√') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.sqrt(num1);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result =  num2 * Math.sqrt(num1);
        }
        stack.push(result);

      } else if (item === 'acos') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.acos(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.acos(num1)).toFixed(10);
        }
        stack.push(result);

      } else if (item === 'atan') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.atan(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.atan(num1)).toFixed(10);
        }
        stack.push(result);

      } else if (item === 'asin') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.asin(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num2 * Math.asin(num1)).toFixed(10);
        }
        stack.push(result);

      } else if (item === 'In') {
        const num1 = Number.parseFloat(stack.pop());
        let result = Math.log(num1).toFixed(10);
        
        if (stack.length > 0) {
          const num2 = Number.parseFloat(stack.pop());
          result = (num1 * Math.log(num2)).toFixed(10);
        }
        stack.push(result);

      }

      else {
        const num1 = Number.parseFloat(stack.pop());
        const num2 = Number.parseFloat(stack.pop());
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
          // Handle other operators as needed
          case '':
            result = Math.pow(num2, num1);
            break;
          case '':
            result = Math.pow(num2, num1);
            break;
          default:
            console.log('Something else!!!');
        }

        stack.push(result + '');
      }
    } else {
      console.log('Something else!!!');
    }
  });

  return Number.parseFloat(stack[0]);
}