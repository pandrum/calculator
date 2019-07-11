const keys = document.querySelector('.calculator');
let display = document.getElementById('output');
let firstValue = '';
let operator = '';
let operatorLastPressed = false;

keys.addEventListener('click', function(e) {
    let value = e.target.classList;
    let number = e.target.textContent;

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
      if (display.textContent == 0 || operatorLastPressed == true) {
        display.textContent = number;
        operatorLastPressed = false;
      } 
      else {
        display.textContent += number;
      }
    else if (value.contains("clear")) {
      display.textContent = 0;
    } 
    else if (value.contains("dot")) {
      console.log("dot");
    } 
    else if (value.contains("equal")) {
      calculate();
    }
});

function calculate() {
    switch (operator) {
        case "plus":
            result = parseFloat(firstValue) + parseFloat(display.textContent)
            display.textContent = result;
            break;
        case "minus":
            result = parseFloat(firstValue) - parseFloat(display.textContent)
            display.textContent = result;
            break;
        case "multiplie":
            result = parseFloat(firstValue) * parseFloat(display.textContent)
            display.textContent = result;
            break;
        case "division":
            result = parseFloat(firstValue) / parseFloat(display.textContent)
            display.textContent = result;
            break;
    }
}
