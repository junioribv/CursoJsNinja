( function () {
    var person = {
        name: 'washington',
        lastname: 'junior',
        age: 18

    }
    console.log('Propriedades de "person": ')
    console.log(Object.keys( person))

    var books = []

    books.push = ({name: 'jQuery mobile', pages: 250})
    books.push = ({name: 'Javascript de Alto desempenho', pages: 150})
    books.push = ({name: 'CSS3', pages: 280 })
    console.log('\n Lista de livros: ')

    console.log(books)
    console.log('\nLivro que esta sendo removido:')

    var lastbook = books.pop()
    console.log(books.pop())

    console.log('\nAgora sobraram somente os livros: ')
    console.log(books)

    books = JSON.stringify (books)
    console.log('\nLivros em formato string')
    console.log(books)

    books = JSON.parse (books)
    console.log('\nAgora os livros sao objetos novamente: ')
    console.log(books)


    for (var i = 0; i < books.length; i++){
        for (var prop in books[i]){
            console.log (prop + ': ' + books[i][prop])
        }
    }
    var myName = ['W', 'a', 's', 'h', 'i', 'n', 'g', 't', 'o', 'n']
    console.log('\nMeu nome é:')
    console.log(myName.join(''))

    console.log('\nMeu nome invertido é: ')
    console.log(myName.reverse().join( '' ))

    console.log('\nAgora em ordem alfabetica: ')
    console.log(myName.sort())

})()