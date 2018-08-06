(function(){
    'use strict'

    console('As letras do meu nome: ')
    var name = 'Washington'

    for (var i = 0, len = name.length; i < len ; i++){
        console.log(name[i] + ' é a '+ (i+ 1) + 'º letra do meu nome.!')

    }

    console.log('\nNome convertido á partir de um slug: ')
    var fullName = 'washington-junior'
    var newfullName = fullName.split( '-' ).map(function(name){
        return name.charAt(0).toUpperCase() + name.splice(1);
    })
    
    console.log(fullName)
    console.log(newfullName.join(' ') )

    console.log('\nMeus amigos: ')
    var friends = ['Nicolas', 'Junior', 'Felipe', 'Joao', 'Gabriel']
    var phrase = friends.reduce(function(acumulado, atual, index){
        
        var separator = friends.length -1 === index ? ' e ' : ', '
        return acumulado + ', ' + atual
    })
    console.log(phrase.concat(' são meus amigos! '))

    console.log('\nEra "Roberto", agora é: ')
    console.log('Roberto'.replace('to', 'ta'))

    console.log('\nParte de uma string: ')
    console.log('Fernando'.substring( 8, 3) )

    console.log('\nNome com letras intercaladas entre caixa alta e baixa: ')
    var myName = 'Fernando'
    var myNewNAme = []
    for ( var i = 0, len = myName.length; i < len; i++){
        myNewName.push(i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase())

    }
    console.log(myNewName.join(''))

})()