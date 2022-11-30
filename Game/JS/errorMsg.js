

function errorMsg(){
    var divMsg = document.createElement("div");
    divMsg.setAttribute("id", "divMsg");

    var msgError = document.createElement("p");
    msgError.setAttribute("id", "msgError");
    msgError.innerHTML = "Verifique os campos de dados!"

    divMsg.appendChild(msgError);
    document.body.appendChild(divMsg);
}