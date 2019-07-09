const keys = document.querySelector('.calculator');
let output = document.getElementById('output');

keys.addEventListener('click', function(e) {
    const action = e.target.classList;
    if (action.contains("division") || action.contains("multiplie") || action.contains('minus') || action.contains('plus')) {
      console.log('operator key!');
    }
    else if (action.contains('equals')) {
        console.log('equals key');
    }
    else if (action.contains('clear')) {
        clearDisplay();
    }
    else if (action.contains('dot')) {
        output.textContent = output.textContent + '.'
    }
    else if (!action.contains('operators')) {
        if (output.textContent == '0') {
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