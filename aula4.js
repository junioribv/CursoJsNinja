var isTruthy = function(a) {
    return !!a
}

//Valores False

isTruthy(false)
isTruthy(0)
isTruthy(NaN)
isTruthy(undefined)
isTruthy(-0)
isTruthy('')
isTruthy("")

//Valores True

isTruthy('nome')
isTruthy(1)
isTruthy(2)
isTruthy('numero')
isTruthy('0')
isTruthy(1500)
isTruthy('Sou Ninja')
isTruthy(true)
isTruthy(5000)
isTruthy("Quero Delivery")

//Declaração de Variavel carro..

var carro = {
    marca: 'String',
    modelo: 'String',
    placa: 'String',
    ano: 0001,
    cor: 'azul',
    quantasPortas: 01,
    assentos: 5,
    quantidadePessoas: 0
}

carro.mudarCor = function(cor) {
    carro.cor = cor;
}

carro.obterCor = function (){
    return carro.cor
}

carro.obterModelo = function(){
    return carro.modelo
}

carro.obterMarca = function(){
    return carro.marca
}

carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo
}

carro.AdicionarPessoas = function(NumPessoas) {
    var totalPessoas = NumPessoas + carro.quantidadePessoas
    if (totalPessoas === carro.assentos){
        return 'O carro ja está lotado!! '
    }
    else if (totalPessoas > carro.assentos) {
        sub = totalPessoas - carro.assentos
        if(sub == 1){
            return 'So cabe mais ' + sub + ' pessoa'
        }
        return 'So cabem mais ' + sub + ' pessoa'
    }
    carro.quantidadePessoas += NumPessoas
    return 'Ja temos ' + totalPessoas + ' pessoas no carro! '
    }


