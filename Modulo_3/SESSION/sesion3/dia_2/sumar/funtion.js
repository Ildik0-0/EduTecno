let number = [];

function ingresarNumero(event){ // en esta funcion esta la forma de agarrar el  event y remplazar con el array  
    number.push(event) //aqui se añade el numero al array
    console.log( "Tu numero es", number);
    
}

function sumar(){
    let sum = number.reduce((a, b) => a + b, 0); /// Sumar todos los números en el arreglo
    document.getElementById('resultado').innerHTML = sum; // Mostrar el resultado en el div 
    number = [];// Vaciar el arreglo después de la suma
}