(function (window, document) {
    'use strict'

    var username = prompt ('Qual o seu nome?') || 'Desconhecido'
    alert ( 'Bem Vindo ', username)

    var email = prompt ('Qual o seu email? ')

    var $inputUsername = document.querySelector('input[type="text"]')
    var $inputEmail = document.querySelector('input[type ="email"]')

    var $message = document.querySelector('textarea')

    var $button = document.querySelector('button')


    $inputUsername.value = username
    $inputEmail.value = email


    $button.addEventListener('click', function(event){
        event.preventDefault()
        if(!$inputUsername.value)
            return alert('Preencha o nome do usuario: ')
        if(!$inputEmail.value)
            return alert( 'Preencha o e-mail! ')
        if(isValidEmail($inputEmail.value))
            return alert('Entre com um email valido! ')
        if(!$message.value)
            return alert('Preencha o campo de mensagem! ')
        if(confirm( 'Tem certeza que deseja enviar o formulario? '))
            return alert('Enviado com sucesso! ')
        alert('Não enviado! ') 
    }, false)

    function isValidEmail(email){
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?/.test(email)
    }
})(window, document)