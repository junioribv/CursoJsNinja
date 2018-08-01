

var sum = function calculateSum(a, b){
    return a+b
}

var valor1 = 10
var valor2 = 7
console.log('A soma de '+ valor1 + ' e ' + valor2 + ' é igual a ' + sum(valor1, valor2) )

console.log('O nome da função que faz a soma é '+sum.name)

function showName(){
    return 'Washington Junior'
}

var varShowName = showName()

console.log("A função " + showName.name  + " retorna " + varShowName + ".")

function calculator(operador) {
    return function(n1, n2){
        var result
        switch(operador){
            case '+':
                result = n1 + n2;
                break
            case '-' :
                result = n1 - n2
                break
            case '*' :
                result = n1*n2
                break
            case '/' :
                result = n1/n2
                break
            case'%' :
                result = n1 % n2
                break
            default :
                return  'Operador invalido'
        }
        return 'REsultado da operação : ' +n1+ ' ' +operador+ ' ' +n2+ ' = ' +result+ '.'

    }


}

var sum = calculator('+')

console.log(sum(8, 2))

var sub = calculator('-')

console.log(sub(10, 5))

var mult = calculator('*')

console.log(mult(2, 10))

var div = calculator('/')

console.log(div(36, 8))

var mod = calculator('%')

console.log(mod(5, 2))