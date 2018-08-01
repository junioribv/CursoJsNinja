(function (){
    var five = Number('5');
    console.log( five + ' é número?', typeof five === 'number' );

    var concat = String(10) + 10;
    console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );


    var operation = {
        '+' : function(x, y) {
            return x + y
        },
        '-' : function(x, y) {
            return x - y
        },
        '*' : function(x, y) {
            return x * y
        },
        '/' : function(x, y) {
            return x / y
        },
        '%' : function(x, y) {
            return x % y
        }
    }
    function isOperatorValid(operator){
        return !! operation(operator)    
    }

    function calculator(operator){
        if(!isOperatorValid (operator)) {
            return false
        }
        return function (x, y){
            if ( typeof x !== 'Number' && typeof y !== 'Number') {
                return false
            }
            return operation [operator] (x, y)
        }
    }

    function showOperationMessage (operator, number1, number2){
        return 'A  operaçao ' + number1+ ' ' +operator+ ' ' +number2+ ' ='
    }

    function showErrorMessage (operator ){
        return 'Operação' + operator + ' não permitida!'
    }

    var number1 = 0
    var number2 = 0
    var operationSignal

    operationSignal = '+'
    var sum = calculator (operationSignal)
    if (sum){
        number1 = 10
        number2 = 12
        console.log (showOperationMessage(operationSignal, number1, number2)), sum (number1, number2)
    }
    else {
        showErrorMessage(operatorSignal)
    }

    operationSignal = '-'
    var sub = calculator (operationSignal)
    if (sub){
        number1 = 15
        number2 = 21
        console.log (showOperationMessage(operationSignal, number1, number2)), sum (number1, number2)
    }
    else {
        showErrorMessage(operatorSignal)
    }


    operationSignal = '*'
    var mult = calculator (operationSignal)
    if (mult){
        number1 = 10
        number2 = 12
        console.log (showOperationMessage(operationSignal, number1, number2)), sum (number1, number2)
    }
    else {
        showErrorMessage(operatorSignal)
    }

    operationSignal = '/'
    var div = calculator (operationSignal)
    if (div){
        number1 = 10
        number2 = 5
        console.log (showOperationMessage(operationSignal, number1, number2)), sum (number1, number2)
    }
    else {
        showErrorMessage(operatorSignal)
    }

    operationSignal = '%'
    var mod = calculator (operationSignal)
    if (mod){
        number1 = 10
        number2 = 12
        console.log (showOperationMessage(operationSignal, number1, number2)), sum (number1, number2)
    }
    else {
        showErrorMessage(operatorSignal)
    }
})()