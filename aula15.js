(function(){


    function Person(name, lastName, age){
        this.name = name
        this.lastName = lastName
        this.age = age
        this.getFullName = function getFullName(){
            return this.name + ' ' + this.lastName
        }
        this.getAge = function getAge(){
            return this.age
        }

        this.addage = function addage(){
            this.age += arguments[0];
            return this
        }
    }

    console.log('Novas pessoas criadas a partir de Person: ')
    var washington = new Person ( 'washington', 'junior', 18)
    var joao = new Person('Joao', 'Felipe', '25')
    var maria = new Person ('maria', 'eduarda', '30')
    console.log(washington)
    console.log(joao)
    console.log(maria)

    console.log('Nome das pessoas')
    console.log(washington.getFullName)
    console.log(joao.getFullName)
    console.log(maria.getFullName)

    console.log('\nIdade das pessoas')
    console.log(washington.getFullName() + ' tem ' + washington.getAge() + ' anos.!')
    console.log(joao.getFullName() + ' tem ' + joao.getAge() + ' anos.!')
    console.log(maria.getFullName() + ' tem ' + maria.getAge() + ' anos.!')

    console.log('\nNova idade da pessoa!')
    console.log(washington.getFullName() + ' tem ' + washington.addage(2).getAge() + ' anos.!')
    console.log(joao.getFullName() + ' tem ' + joao.addage(7).getAge() + ' anos.!')
    console.log(maria.getFullName() + ' tem ' + maria.addage(-5).getAge() + ' anos.!')

})()