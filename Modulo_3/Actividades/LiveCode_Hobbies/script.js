// Obtener referencias a los elementos HTML
const inputHobby = document.getElementById('hobby');
const listaHobbies = document.getElementById('listaHobbies');
const inputBuscar = document.getElementById('buscarHobby');

// Función para agregar un hobby a la lista
function agregarHobby() {
  const nuevoHobby = inputHobby.value;
  if (nuevoHobby !== '') {
    const li = document.createElement('li');
    li.textContent = nuevoHobby;
    listaHobbies.appendChild(li);
    inputHobby.value = '';
  }
}

// Función para buscar un hobby en la lista 
function buscarHobby() {
    const hobbyABuscar = inputBuscar.value.toLowerCase(); // Convertimos a minúsculas para una comparación más robusta
    const listaHobbiesArray = Array.from(listaHobbies.children); // Convertimos la lista de elementos li en un array
  
    listaHobbiesArray.forEach(li => {
      if (li.textContent.toLowerCase().includes(hobbyABuscar)) {
        li.style.backgroundColor = 'yellow'; // Resaltamos el elemento encontrado
      } else {
        li.style.backgroundColor = 'white';
      }
    });
  }
  