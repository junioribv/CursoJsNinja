

function somafun(a, b) {
    return a + b 
}
soma = somafun(10, 2)

var newvar
function newfunction() {
    newvar = 10
    return 'O valor da variavel agora é ' + newvar
}
newfunction()

function novafun(a, b, c) {
    if (a == undefined || b == undefined || c == undefined){
        return 'Preencha todos os valores corretamente!! '
    }
    return (a*b*c) + 2
}
novafun(5, 2)
// retornou a string
novafun(10, 2, 5)
// retornou o valor a ser recebido

function finalfun(arg1, arg2, arg3) {
    if (arg1 != undefined && arg2 == undefined && arg3 == undefined){
        return arg1
    }
    else if (arg1 != undefined && arg2 != undefined && arg3 == undefined){
        return arg1 + arg2
    }
    else if (arg1 != undefined && arg2 != undefined && arg3 != undefined){
        return (arg1 + arg2)/ arg3
    }
    else {
        return false
    }
    return null
}


finalfun()
// nenhum valor
finalfun(1)
// 1 valor
finalfun(1, 2)
// 2 valores
finalfun(1, 2, 3)
// 3 valores


