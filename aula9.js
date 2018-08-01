(function (){

    function myFunction() {
        var number1 = 10;
        var number2 = 20;
        console.log( 'Na função `myFunction`, o primeiro número é', number1 );
        console.log( 'Na função `myFunction`, o segundo número é', number2 );
        
        return number1 + number2;
        
    }
    myFunction();
    function myFunction2() {
        var number1 = 10;
        var number2 = 20;
        var sum = function sum() {
        return number1 + number2;
        console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
        };
        
        return sum();
    }
    myFunction2();
    function myFunction3() {
        var number1 = 40;
        var number2 = 50;
        console.log( 'A soma de 40 e 50 é igual a', sum() );
        console.log( 'Na função myFunction3, number1 é igual a', number1 );
        
        return sum();
        function sum() {
            return number1 + number2;
        };
    }
    myFunction3();

    function calculator(n1, n2) {
        return function(callback){
            return callback(n1, n2)
        }
    }

    var sum = calculator(10, 2)

    console.log( 'O resultado da soma é:' )
    console.log(sum(function(num1, num2){
        return num1 + num2
    }))

    var sub = calculator(5,2)
    var mult = calculator (11,2)
    var div = calculator (15, 3)
    var mod = calculator (15, 10)

    console.log( 'O resultado da subtração é:' );
    console.log(sub(function(num1, num2){
        return num1 - num2
    }))

    console.log( 'O resultado da multiplicação é:' );
    console.log(mult(function(num1, num2){
        return num1 * num2
    }))

    console.log( 'O resultado da divisão é:' );
    console.log(div(function(num1, num2){
        return num1 / num2
    }))

    console.log( 'O resto da divisão é:' );
    console.log(mod(function(num1, num2){
        return num1 % num2
    }))


}())