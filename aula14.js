(function(){
    console.log( 'Number Objects Array: ')
    var numberObjects = []
    for( var i = 1; i <=10; i++) {
        numberObjects.push({number: i})
    }
console.log(numberObjects)

console.log('\nJust Numbers: ')
var justNumbers = numberObjects.map(function(item){
    return item.number
})

console.log(justNumbers)

console.log( '\nJust module of division by 2 or 3:')

var justMod2Or3 = justNumbers.filter(function(item){
    return item % 2 === 0 || item % 3 === 0;
})

console.log (justMod2Or3)


console.log('\nOperation: ')
var operation = justMod2Or3.reduce(function(acumulado, atual){
    return (acumulado + 1) * atual
}, 0)

console.log(operation)


console.log( '\nOperation 2: ')
var operation2 = justMod2Or3.reduceRight(function(acumulado, atual){
    return (acumulado + 1) * atual
}, 0)

console.log(operation2)

console.log('\nSeu nome na lingua do "p": ')
var name = ['was', 'hi', 'ng', 'ton']
var reduceP = name.reduce(function(acumulado, atual){
    return acumulado + 'P' + atual
}, '')
console.log(reduceP)

console.log('\nInversed Name: ')
var inversedName = name.reduceRight(function(acumulado, atual){
    return acumulado + atual

})
console.log(inversedName)

console.log('\nNumber Objects')
console.log(numberObjects)

console.log('\nExiste um  {number: 2} em numberObjects? ')

if(numberObjects.indexOf({number: 2}) > -1 ){
    console.log('Existe um objeto {number: 2} em numberObjects')
}
else {
    console.log('Nao Existe um objeto {number: 2} em numberObjects')

}

console.log('\nE buscando a partir do ultimo indice, o {number: 2} existe? ')
if(numberObjects.indexOf({number: 2}, 2) > -1 ){
    console.log('Existe um objeto {number: 2} em numberObjects')
}
else {
    console.log('Nao Existe um objeto {number: 2} em numberObjects')

}

console.log('\njustMod2Or3 é um array? Se for, a representaçao dele em String é :')
if(Array.isArray(justMod2Or3)){
    console.log(justMod2Or3.toString)
}


})()