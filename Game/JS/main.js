
/*  CRIAR CONFIGURAÇÃO DE FORM 
    CONFIGURAÇÃO DE CRIAÇÃO DE GAME
    CONFIGURAÇÃO DE PLACEHOLDER DO USERNAME
*/



var btnCreate = document.querySelector("#createRoom");

btnCreate.addEventListener("click", function(e) { 

    e.preventDefault();

    var nickname = document.querySelector("#keyName");

    var value = nickname.value;

    console.log(value);

})