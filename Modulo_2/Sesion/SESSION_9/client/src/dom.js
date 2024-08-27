//var selectoId = document.getElementById('parrafo');
//var selectoId = document.getElementsByTagName('');
//var selectoId = document.getElementsByClassName('contenedor');
//var varios = document.querySelector(".contenedor")

//buscamos el dato que contien el id = parrafo (el texto del HTML y no todo con las Etiquetas) 
var selectoId = document.getElementById('parrafo').innerHTML 

console.log(selectoId);

var selectorClass = document.getElementsByClassName("contenedor");
for(let i = 0; i < selectorClass.length; i ++){
console.log(selectorClass[i].innerHTML);
}

/* este ejemjo agrega a pagi de HTML el nuevo p  */
var creandoElemento = document.createElement("p");
creandoElemento.textContent = "Este nodo fue creado desde JavaScript"; // este comando se utilñiza para "CREAR" el text de "p"
document.body.appendChild(creandoElemento); //este comando se utiliza para la incorporacion al html

/*Modifiquemos nuestro ejemplo. Utilizaremos querySelector para seleccionar una class y dentro de
ese elemento, como su hijo, incorporaremos la misma <p> creada previamente. */
var selectorVarios = document.querySelector(".contenedor");
var creandoElemento = document.createElement("p");
creandoElemento.textContent = "Este nodo fue creado desde JavaScript pero dentro de la estiqueta de <p>";
selectorVarios.append(creandoElemento);

//----------------------------------------------------------------
//cambia la informacion que tenia anteriormente el id=parrafo y le otorga un nuevo valor 
var texto = document.getElementById("parrafo").innerHTML="Nuevo texto"; 
/*esto es una variacion de lo mismo
var texto = document.getElementById("parrafo").innerText="Nuevo texto";  */