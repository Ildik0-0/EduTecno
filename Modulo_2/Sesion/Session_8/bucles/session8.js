
do{
    //se crean la opciones del prompt
    var opciones = prompt("Seleciones una Opcion: \n 1. - SI \n 2. -NO \n 3. - Tal Vez \n 4. - Llore \n 5. -Salir");

    switch(opciones) {
        case '1': alert("elegiste 1 = SI"); break;

        case '2': alert("elegiste 2 = NO"); break;

        case '3': alert("elegiste 3 = Tal Vez"); break;

        case '4': alert("elegiste 4 = Llore"); break;

        case '5': alert("elegiste 5 = Salir"); break;

        default: alert("No existe La opcion"); break;

    }
console.log(typeof opciones);

} while (opciones !== '5') {}
