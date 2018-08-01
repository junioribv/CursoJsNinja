var championship = 'Copa'
console.log(championship)

var teams = ['Brasil', 'holanda', 'italia', 'alemanha', 'belgica']

console.log( 'Times que estão participando do campeonato:', teams )

function showTeamPosition(num) {
    if (num < 1 || num > 5){
        return  "Não temos a informação do time que está nessa posição."
    }
    return "O time que esta em " +num+ "º lugar é o " + teams[--num];
}

console.log(showTeamPosition(1))
console.log(showTeamPosition(2))
console.log(showTeamPosition(3))
console.log(showTeamPosition(5))
console.log(showTeamPosition(6))

var num = 20;

while (num <= 30){
    console.log(num)
    num++
}
function convertToHex(cor){
    var cores = ['vermelho', 'azul', 'cinza', 'preto', 'branco']
    switch(cor){
    case 'vermelho' :
    console.log('O hexadecimal para a cor ' +cor + ' é '+128+ '.')
    break
    case 'azul' :
    console.log('O hexadecimal para a cor ' +cor + ' é '+78+ '.')
    break
    case 'cinza' :
    console.log('O hexadecimal para a cor ' +cor + ' é '+13+ '.')
    break
    case 'preto':
    console.log('O hexadecimal para a cor ' +cor + ' é '+0115+ '.')
    break
    case 'branco' :
    console.log('O hexadecimal para a cor ' +cor + ' é '+354+ '.')
    break
    default:
    console.log('"Não temos o equivalente hexadecimal para '+cor+".")
    }

}


console.log(convertToHex('azul'))
console.log(convertToHex('vermlho'))
console.log(convertToHex('amarelo'))
console.log(convertToHex('lilas'))
console.log(convertToHex('cinza'))
console.log(convertToHex('vermelho'))
console.log(convertToHex('preto'))
console.log(convertToHex('branco'))