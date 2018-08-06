(function (win, doc){

    "use strict"
    var $visor = doc.querySelector('[data-js="visor"]')
    var $buttonNumbers = doc.querySelectorAll('[data-js="button-number"]')
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]')
    var $buttonCE = doc.querySelector('[data-js="button-ce"]')
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]')
    
    
    function initialize() {
        initEvents()
    }
    function initEvents(){
        Array.prototype.forEach.call($buttonNumbers, function(button){
            button.addEventListener('click', handleClickNumber, false)
        })
        Array.prototype.forEach.call($buttonsOperations, function(button){
            button.addEventListener('click', handleClickOperation, false)
        })

        $buttonCE.addEventListener('click', handleClickCE, false)
        $buttonEqual.addEventListener('click', handleClickEqual, false)
    }
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
        var operations = getOperations()
        var lastItem = $visor.value.split('').pop()
        return operations.some(function(operator){
            return operator === lastItem
        })
    }

    function getOperations(){
        debugger
        return Array.prototype.map.call($buttonsOperations, function(button){
            return button.value
        })
    }


    function removeLastItemIfItIsAnOperation(string){
        if (isLastItemAnOperation(string))
            return string.slice(0, -1)
        
        return string
    }

    function handleClickEqual(){
        $visor.value = removeLastItemIfItIsAnOperation($visor.value)
        var allValues = $visor.value.match(getRegexOperations())
        $visor.value = allValues.reduce(calculateAllValues)
    }
    function getRegexOperations(){
        return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g')

    }

    function calculateAllValues(accumulated, actual){
        var firstValue = accumulated.slice(0, -1)
        var operator = accumulated.split('').pop()
        var lastValue = removeLastItemIfItIsAnOperation(actual)
        var lastOperator = getLastOperator(actual)
        return doOperation(operator, firstValue, lastValue) + lastOperator
    }
    function getLastOperator(value){
        return isLastItemAnOperation(value) ? value.split('').pop() : ''            

    }
    
    
    function doOperation(operator, firstValue, lastValue){
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
    }

    initialize()
})(window, document)