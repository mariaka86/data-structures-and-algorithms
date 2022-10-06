Code:

function validateBrackets(string) {

  let bracketStack = new Stack();

  for (let i = 0; i < string.length; i++) {

    if (string[i] === '[' || string[i] === '{' || string[i] === '(') {

      bracketStack.push(string[i]);

    }

    if (string[i] === ']') {
      bracketStack.peek() === '['
        ? bracketStack.pop()
        : return false;

    }

    if (string[i] === '}') {
      bracketStack.peek() === '{'
        ? bracketStack.pop()
        : return false;

    }

    if (string[i] === ')') {
     bracketStack.peek() === '('
    ? bracketStack.pop()
    : return false;

    }

  }

  return bracketStack.isEmpty();

}
