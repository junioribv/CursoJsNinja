var arr = ['Eu', 123, {carro: 'azul'}, null, 'oloco meu']

function addItem(item){
    arr.push(item)
    return arr
}
arr.push([1, 'ninja', undefined])

console.log('O segundo elemento do segundo array é '+ arr[6][1])
console.log('O segundo array tem ' + arr.length + ' itens.')

var num = 10
console.log('Numeros pares entre 10 e 20.!')

while (num <= 20) {
    num%2 ==0 ? console.log(num) : ''
    num++
}

num = 10
console.log('Numeros impares entre 10 e 20.!')

while (num <= 20) {
    num%2 ==1 ? console.log(num) : ''
    num++
}
console.log('Numeros pares entre 10 e 20.!')
for (var num = 100; num <= 120; num++ ){
    num%2 ==0 ? console.log(num) : ''

}
console.log('Numeros impares entre 10 e 20.!')
for (var num = 111; num <= 125; num++ ){
    num%2 ==1 ? console.log(num) : ''

}
