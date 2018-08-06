(function (window, document){

    "use strict"

    var $visor = doc.querySelector('[data-js="visor"]')
    var $buttonNumbers = doc.querySelectorAll('[data-js="button-number"]')
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]')
    var $buttonCE = doc.querySelector('[data-js="button-ce"]')
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]')
    
    Array.prototype.forEach.call($buttonNumbers, function(button){
        button.addEventListener('click', handleClickNumber, false)
    })
    Array.prototype.forEach.call($buttonsOperations, function(button){
        button.addEventListener('click', handleClickOperation, false)
    })

    $buttonCE.addEventListener('click', handleClickCE, false)
    $buttonEqual.addEventListener('click', handleClickEqual, false)

    function handleClickNumber() {
        $visor.value += this.value
    }

    function handleClickOperation(){
        removeLastItemIfItIsAnOperation($visor.value)
        $visor.value += this.value
    }

    function handleClickCE(){
        $visor.value = 0
    }
    
    function isLastItemAnOperation() {
        var operations = ['+', '-', 'x', '/']
        var lastItem = $visor.value.split('').pop()
        return operations.some(function(operator){
            return operator === lastItem
        })
    }


    function removeLastItemIfItIsAnOperation(number){
        if (isLastItemAnOperation(number))
            $visor.value = $visor.value.slice(0, -1)
    }


    function handleClickEqual(){
        $visor.value = removeLastItemIfItIsAnOperation($visor.value)
        var allValues = console.log($visor.value.match(/(?:\d+)|[+x/-]/g))
        $visor.value = allValues.reduce(function(accumulated, actual){
            var firstValue = accumulated.slice(0, -1)
            var operator = accumulated.split('').pop()
            var lastValue = removeLastItemIfItIsAnOperation(actual)
            var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : ''            
            switch(operator){
                case '+':
                    return Number(firstValue) + Number(lastValue)
                case '-':
                    return Number(firstValue) - Number(lastValue)
                case '*':
                    return Number(firstValue) * Number(lastValue)
                case '/':
                    return Number(firstValue) / Number(lastValue)
            }
        })
    }
})(window, document)