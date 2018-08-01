
var varobjeto = []
var pessoa = {
    nome: 'washington',
    sobrenome: 'junior',
    sexo: 'masculino',
    idade: 18,
    altura: 1.78,
    peso: 89,
    andando: false,
    caminhouQuantosmetros: 0
}

pessoa.fazerAniversario = function(){
     pessoa.idade++   
}

pessoa.andar = function(metrosandado) {
    return
    pessoa.caminhouQuantosmetros += metrosandado
    pessoa.andando = true
}

pessoa.parar = function(){
    pessoa.andando = false
}

pessoa.nomeCompleto = function () {
    return "Olá!, Meu nome é " + pessoa.nome + ' ' + pessoa.sobrenome
}

pessoa.mostrarIdade = function (){
    return "Olá!, eu tenho " + pessoa.idade + 'anos!'
}

pessoa.mostrarPeso = function (){
    return "Eu peso " + pessoa.peso + ' Kg'
}

pessoa.mostrarAltura = function() {
    return "Minha altura é " + pessoa.altura + 'm'
}

pessoa.apresentaçao = function () {
    return 'Olá meu nome é ' + pessoa.nomeCompleto() + ', tenho ' + pessoa.idade + 'anos'
}