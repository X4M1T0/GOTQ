
/*  CRIAR CONFIGURAÇÃO DE FORM 
    CONFIGURAÇÃO DE CRIAÇÃO DE GAME
    CONFIGURAÇÃO DE PLACEHOLDER DO USERNAME
*/


var pageRedirect = [];




function validateNick(){

    const nickname = document.getElementById("exampleInputEmail1").value;

    const btnCreate = document.querySelector("#btnCreate");

    btnCreate.addEventListener("click", function(e){
        if(!nickname){
            errorMsg();
            console.log(nickname);
        } else {
            excludeError();
            console.log(nickname);
            pageRedirect = "../Game/create.html";
            windowReplace(pageRedirect);
        }
    });

    const btnPlay = document.querySelector("#btnPlay");

    btnPlay.addEventListener("click", function(e){
        if(!nickname){
            errorMsg();
            console.log(nickname);
        } else {
            excludeError();
            console.log(nickname);
            getLink();
        }

    });


}


function createRoom(){
    validateNick();
}

function playRoom(){
    validateNick();
}

function windowReplace(pageRedirect) {
    location.replace(pageRedirect);
}



/*
        FUNCTION DE CRIAÇÃO DE FORMULÁRIO PARA BUTTON PLAY
*/


function getLink(){

    // DIV DE BRUSH
    var brushDiv = document.createElement("div");
    brushDiv.setAttribute("id", "brushDiv");


    // BOX DESIGN CONFIG
    var boxGetLink = document.createElement("div");
    boxGetLink.setAttribute("id", "boxGetLink");


    // LABEL DO INPUT
    var labelInp = document.createElement("label");
    labelInp.innerText = "Digite o link da partida:"
    labelInp.setAttribute("id", "labelInp");


    // INPUT DO GET LINK
    var inpLink = document.createElement("input");
    inpLink.setAttribute("type", "text");
    inpLink.setAttribute("placeholder", "Link da partida");
    inpLink.setAttribute("id", "inpLink");


    // BUTTON PARA ENVIO DE FORM
    var btnGet = document.createElement("input");
    btnGet.setAttribute("id", "btnGet");
    btnGet.setAttribute("type", "button");
    btnGet.setAttribute("value", "Jogar");
    btnGet.setAttribute("onclick", "enterGame()");  // FUNCTION DO INPUT
    btnGet.setAttribute("class", "btn btn-primary");


    // BUTTON EXIT 
    var btnExit = document.createElement("input");
    btnExit.setAttribute("type", "button");
    btnExit.setAttribute("id", "btnExit");
    btnExit.setAttribute("value", "X");
    btnExit.setAttribute("onclick", "exitPlay()");


    // CONFIG APPENDCHILD
    brushDiv.appendChild(boxGetLink);
    boxGetLink.appendChild(btnExit);
    boxGetLink.appendChild(btnGet);
    boxGetLink.appendChild(inpLink);
    boxGetLink.appendChild(labelInp);
    document.body.appendChild(brushDiv);



    // DESABILITANDO BUTTONS DO FORM NICKNAME
    const btnCreate = document.querySelector("#btnCreate");
    btnCreate.setAttribute("disabled", "true");

    const btnPlay = document.getElementById("btnPlay");
    btnPlay.setAttribute("disabled", "true");

}


function enterGame(){
    const linkGame = document.getElementById("inpLink").value;

    if(!linkGame){
        errorMsg();
    } else {
        console.log(linkGame);
        location.replace(linkGame);
    }

}


function exitPlay(){
    document.getElementById("brushDiv").remove();

     // REABILITANDO BUTTONS DO FORM NICKNAME
     const btnCreate = document.querySelector("#btnCreate");
     btnCreate.removeAttribute("disabled");
 
     const btnPlay = document.getElementById("btnPlay");
     btnPlay.removeAttribute("disabled");
 
}