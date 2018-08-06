(function(){
    'use strict'

    var washington = {
        name: 'Washington',
        lastname: 'Junior'
    }

    var maria = {
        name = 'Maria',
        lastname = 'joaquina'
    }

    function getFullname(){
        return this.name + ' ' + this.lastname
    }

    console.log( getFullname.call(washington))
    console.log( getFullname.call(maria))


    function sum() {
        console.log( arguments)
        return Array.prototype.reduce.call(arguments,
        function(accumulated, actualItem){
          return Number(accumulated) + Number(actualItem)  
        })
    }

    console.log('\nSomar alguns numeros: ')
    console.log( sum(1, 2, 3))
    console.log( sum(2, 8, 9, 7, 5))
    console.log( sum(10, 100))

    var userEntry = prompt( 'Entre com alguns numeros que serão somados ')

    console.log( '\nEntrada do usuario ')
    console.log(userEntry)

    console.log('\nFunçao que limpa entrada do usuario (somente numeros) : ')
    function justNumbers(entry){
        entry.replace (/\D+/g, ',' ).split(',')
    }
    
    console.log('\nEntrada do usuario limpa. Somente numeros: ')
    var numbers = justNumbers (userEntry)

    console.log('\nSomar numeros entrados pelo usuario ')
    console.log(sum.apply(sum, numbers))



})()