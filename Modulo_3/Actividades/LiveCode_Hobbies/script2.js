let nameUser = "";
let resultDiv = document.getElementById('showResult');

document.getElementById('searchHobby').addEventListener('click', function (event) {
    event.preventDefault();

    let result = "";
    nameUser = document.getElementById('nameUser').value;

    if(nameUser == "Iremar"){
        result = "Natacion";

    }else if(nameUser == "Claudio"){
        result = "Ciclismo" ;
    }else if(nameUser == "Nicolas"){
        result = "Jugar :)";
    }else{
        result = "No existe el registro :("
    }

    resultDiv.innerHTML = result;    
    
})


