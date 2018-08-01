(function(){
    var once = false
    do{
        console.log('Entrou ao menos uma vez')
        
    }while(once!=false)

    var person = {
        name: 'washington',
        age: 18,
        peso: 90,
        aniversario: '13/06' 
    }
    var counter = 0
    for (var prop in person){
        console.log('The ' + prop + ' of person is ' +person[prop]+ '.')
        counter++
    }
    console.log('The person has ' + counter+ ' properties')


    console.log ('De 0 a 10: ')

    var numbers = []

    for ( var i = 0; i < 20 ; i++){
        if(i > 10){
            break
        }
        numbers.push(i)
    }
    console.log(numbers)


    console.log('Pares de 0 a 20: ')

    numbers = []

    for (var i = 0; i <= 20; i++){
        if(i%2 !== 0){
            continue
        }
        numbers.push(i)
    }
    console.log(numbers)

    

})()

