
function load() {

    var btns = document.querySelectorAll('#calculator span');

    console.log(btns);
    var operators = ['+', '-', 'x', '÷'];
    var inputScreen = document.querySelector('#screen');
    var btnValue;
    var input;

    for(var i=0; i< btns.length; i++) {

        var decimalAdded = false; // Flag used to avoid two decimal

        btns[i].addEventListener('click', function () {

            btnValue = this.innerHTML;
            input = inputScreen.innerHTML;

            switch (btnValue) {
                case 'C':
                    inputScreen.innerHTML = '';
                    decimalAdded = false;
                    break;
                case '=':
                    // Last char of string
                    var lastChar = input[input.length - 1];

                      // Replace x to *, + to / which could be calculated in eval
                       input = input.replace("x", '*').replace("÷", '/');
                    //checking if expression is incomplete
                    //the last char should not be an operator or a decimal
                    if(operators.includes(lastChar) || lastChar == '.'){
                      break;
                      // input = input.replace(/.$/, '');
                    }
                    else  {
                        // If the argument is an expression, eval() evaluates the expression.
                        // If the argument is one or more JavaScript statements, eval() executes the statements.
                        inputScreen.innerHTML = eval(input);
                    }
                    decimalAdded = false; //resetting this
                    break;
                case '.':
                    if(!decimalAdded) {
                        inputScreen.innerHTML += btnValue;
                        decimalAdded = true;
                    }
                    break;
                case '+':
                case '-':
                case 'x':
                case '÷':
                    // Last char of string
                    var lastChar = input[input.length - 1];
                    // Only add operator if input is not empty and there is no operator at the last
                    if(input != '' && !operators.includes(lastChar))
                        inputScreen.innerHTML += btnValue;
                    // Allows minus if the string is empty. The first number could be under zero
                   else{
                      if(input == '' && btnValue == '-')
                     { inputScreen.innerHTML += btnValue; }
                    } 
                    // Allows to represent the last operation
                    if(operators.includes(lastChar) && input.length > 1) {
                      inputScreen.innerHTML = input.replace(lastChar, btnValue);
                    }
                     break;
                default:
                    inputScreen.innerHTML += btnValue;
                    break;
            }
        });
    }
}