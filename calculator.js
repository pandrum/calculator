const keys = document.querySelector('.calculator');
let output = document.getElementById('output').textContent;
let firstvalue = 0;
let operator = '';
let operatorPressed = false;

keys.addEventListener('click', function(e) {
    let action = e.target.classList;

    if (action.contains("division")) {

    }
    else if (action.contains("multiplie")) {

    }
    else if (action.contains("minus")) {

    }
    else if (action.contains("plus")) {
        firstvalue = output.textContent;
        operator = 'plus';
        operatorPressed = true;
    }
    else if (action.contains('equals')) {

    }
    else if (action.contains('clear')) {
        clearDisplay();
    }
    else if (action.contains('dot')) {
        if (output.textContent.indexOf(".") !== -1) {
            return
        }
        else {
            output.textContent = output.textContent + ".";
        }
    }
    else if (action.contains('number')) {
        if (output.textContent === '0') {
            output.textContent = e.target.textContent;
        }
        else {
            output.textContent += e.target.textContent;
        }
    }
});

function clearDisplay() {
    output.textContent = 0;
}
