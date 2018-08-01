/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?

var myarr = [1, 2, 3, 4, 5]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function myFunction(arr){
    return arr
}
/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
 console.log(myFunction(myarr)[1])
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function myFunction2(arr1, num){
    return arr1[num]

}
/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var  myarr2 = [1, 'ola', true, function(){1, 2}, {nome: 'eu', numero: 3}]
/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log (myFunction2(myarr2, 0) )
console.log (myFunction2(myarr2, 1) )
console.log (myFunction2(myarr2, 2) )
console.log (myFunction2(myarr2, 3) )
console.log (myFunction2(myarr2, 4) )
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function Book(nameBook){
    var allbook = {
         'nomelivro1': {
            quantidadePaginas: 100,
            autor: 'fulano',
            editora: 'alguma coisa'
        },
         'nomelivro2': {
            quantidadePaginas: 150,
            autor: 'ciclano',
            editora: 'Quem sabe'
        },
         'nomelivro3': {
            quantidadePaginas: 200,
            autor: 'beltrano',
            editora: 'è ne'

        }
    }
    return !nameBook ? allbook : allbook[namebook]
}
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
console.log(Book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
var bookName = 'nomelivro2'
console.log('O livro ' + bookName + ' tem ' + Book( bookName ).quantidadePaginas +  " páginas!")
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
var nomeautor = 'ciclano'
console.log('O autor do livro ' + bookName + " é " + nomeautor)
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
var nomeeditora = 'é ne '
console.log ('O livro ' + bookName + ' foi publicado pela editora ' + nomeeditora)

