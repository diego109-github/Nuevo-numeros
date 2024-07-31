var primerNumero = 3.5;
var segundoNumero = 25.5;

// operaciones aritmetica con numeros
var sumaNumeros = primerNumero + segundoNumero;
var restaNumeros = primerNumero - segundoNumero;
var multiplicacionNumeros = primerNumero * segundoNumero;
var divisionNumeros = primerNumero / segundoNumero;

console.log(`la suma fue:`,sumaNumeros);
console.log(`la resta fue:`,restaNumeros);
console.log(`la multiplicacion fue:`,parseInt(multiplicacionNumeros));
console.log(`la division fue:`,divisionNumeros.toFixed(2));

var numeroMasLetras = primerNumero - "Alura latam";
console.log(numeroMasLetras);