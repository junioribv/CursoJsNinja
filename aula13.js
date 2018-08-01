(function(){

    console.log('O array em formato de string é :')
    console.log([1, 2, 3, 4, 5 ].toString)

    var sul = [ 'Parana', 'Santa Catarina', 'Rio Grande do Sul']
    var sudeste = ['Espirito Santo', 'Minas Gerais', 'Rio de Janeiro', 'Sao Paulo']


    console.log ('\nAlguns Estados do Brasil')
    var brasil = sul.concat( sudeste)
    console.log(brasil)

    console.log('\nMais estados Adicionados: ')

    brasil.unshift('Acre', 'Amapa', 'Amazonas')
    console.log(brasil)


    console.log ('\nEstados removido: ')
    console.log(brasil.shift())

    var newSul = brasil.slice(2, 5)

    console.log('\nEstados do Sul do Brasil')
    console.log(newSul)

    var nordeste = [
        'Alagoas', 
        'Bahia', 
        'Ceará', 
        'Maranhao', 
        'Paraiba', 
        'Pernambuco',
        'Piaui',
        'Rio Grande do Norte',
        'Sergipe'
    ]
    console.log('\nEstados do Nordeste')
    console.log(nordeste)
    
    var newSudeste = brasil.splice( 5 )
    console.log('\nEstados em newSudeste')
    console.log(newSudeste)

    brasil = brasil.concat(nordeste)

    console.log('\nAlguns Estados do Brasil')
    console.log(brasil)

    var newBrasil = []

    brasil.forEach(function(item, index){
        newBrasil.push({
            id: index,
            estado: item
        })
    })

    console.log('\nNew Brasil')
    console.log(newBrasil)

    console.log('\nTodos os estados de "brasil" tem mais 7 letras?')

    var every = brasil.every(function(item){
        return item.length > 7
    })

    console.log(every 
        ? 'Sim, todos os estados tem mais de 7 letras' 
        : 'Nem todos os estados tem mais de 7 letras'
    )

    console.log( '\nCeara esta incluido em "brasil" ?')

    var some = brasil.some(function(item){
        return item === 'Ceará'
    })

    console.log(
        some
        ? 'Ceara esta incluido!! '
        : 'Ceara nao foi incluido :( '
    )


    var map = newBrasil.map(function(item, index){
        return{
            id: item.id + 1,
            estado: item.estado + ' pertence ao brasil'
        }
        
    })
    console.log('\nnewBrasil agora com mais informações:')
    console.log(map)

    var filter = map.filter(function(item, index){
        return item.id % 2 === 0
    })

    console.log('\nEstados com ID par: ')
    console.log(filter)




})()