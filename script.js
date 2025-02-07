// Función principal para solicitar y convertir la temperatura
function solicitarTemperatura() {
  // Solicito al usuario que ingrese la temperatura en grados Celsius
  let celsius = prompt("Introduce la temperatura en grados Celsius:");

  // Conviero la entrada a número para poder realizar las conversiones
  celsius = Number(celsius);

  // Verifico si lo ingresado es un número válido
  if (isNaN(celsius)) {
    // Si no es un número, aviso al usuario y vuelvo a pedir la temperatura
    alert("Por favor, ingresa un número válido.");
    solicitarTemperatura(); // Llamo nuevamente a la función para pedir la temperatura
  } else {
    // Si la entrada es válida, realizo las conversiones

    // Convierte de Celsius a Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;

    // Convierte de Celsius a Kelvin
    let kelvin = celsius + 273.15;

    // Muestro los resultados en la consola
    console.log(`La temperatura en grados Celsius es: ${celsius}`);
    console.log(`La temperatura en grados Fahrenheit es: ${fahrenheit}`);
    console.log(`La temperatura en grados Kelvin es: ${kelvin}`);
  }
}

// Llamo a la función para que comience el proceso
solicitarTemperatura();

  