  //Obtener la fecha y hora actual
  let fechaActual = new Date();

  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1; // Los meses en JavaScript son 0-11
  let agno = fechaActual.getFullYear();
  
  let fechaFormateada = `${dia}/${mes}/${agno}`;

  // Generar un numero aleatorio redondeando
  let numeroTeminal = Math.floor(Math.random() * 100);
  //console.log(numero);

  //Obtener la Hora 
  let hora = fechaActual.getHours()
  let minutos = fechaActual.getMinutes()
  let horaFormateada = `${hora}:${minutos}`;

  let fechaProxima = new Date(fechaActual);
  fechaProxima.setMinutes(fechaActual.getMinutes() + Math.floor(Math.random() * 120) );

 document.getElementById('fecha').innerHTML = 'Fecha actual ' + fechaFormateada;
 document.getElementById('hora').innerHTML =  'Hora actual ' + horaFormateada;
 document.getElementById('proximoViaje').innerHTML = 'Proximo Viaje ' + fechaProxima.getHours()+':'+fechaProxima.getMinutes(); 
 document.getElementById('terminal').innerHTML =  'Numero de terminal ' +numeroTeminal; 
