const keys = document.querySelector('.calculator');
let display = document.getElementById('output');
let firstValue = '';
let secondValue = '';
let modValue = '';
let operator = '';
let operatorLastPressed = false;
let equalLastPressed = false;


keys.addEventListener('click', (e) => {
    let value = e.target.classList;
    let number = e.target.textContent;

    if (e.target.classList.contains("operators") && operatorLastPressed === false) {
      e.target.classList.add("depressed");
    }
    if (value.contains("plus")) {
        firstValue = display.textContent;
        operator = "plus";
        operatorLastPressed = true;
    }
    else if (value.contains("minus")) {
        firstValue = display.textContent;
        operator = "minus";
        operatorLastPressed = true;
    }
    else if (value.contains("multiplie")) {
        firstValue = display.textContent;
        operator = "multiplie";
        operatorLastPressed = true;
    }
    else if (value.contains('division')) {
        firstValue = display.textContent;
        operator = "division";
        operatorLastPressed = true;
    }
    else if (value.contains("number"))
      if (display.textContent === '0' || operatorLastPressed == true || equalLastPressed == true) {
          operatorLastPressed = false;
          equalLastPressed = false;
          display.textContent = number;
          removeDepressedState();
      } 
      else {
        display.textContent += number;
      }
    else if (value.contains("clear")) {
      display.textContent = 0;
      firstValue = 0;
    } 
    else if (value.contains("dot")) {
        if (!display.textContent.includes('.')) {
            display.textContent = display.textContent + '.';
        }
    } 
    else if (value.contains("equal")) {
      operatorLastPressed = false;
      equalLastPressed = true;
      calculate();
    }
});

function calculate() {
    switch (operator) {
        case "plus":
                result = parseFloat(firstValue) + parseFloat(display.textContent);
                display.textContent = result;
                break;

        case "minus":  
                secondValue = display.textContent;
                result = parseFloat(firstValue) - parseFloat(display.textContent);
                display.textContent = result;
                firstValue = display.textContent;
                console.log(result);
                console.log(firstValue);
                console.log(secondValue);
                break;

        case "multiplie":
                result = parseFloat(firstValue) * parseFloat(display.textContent);
                display.textContent = result;
                break;

        case "division":
                result = parseFloat(firstValue) / parseFloat(display.textContent);
                display.textContent = result;
                break;
    }
}


function removeDepressedState() {
    let operators = document.querySelectorAll(".operators");
    operators.forEach(function(operator) {
      operator.classList.remove("depressed");
    });
}