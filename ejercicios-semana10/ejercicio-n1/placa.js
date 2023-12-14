' use stric'


// Escribir un programa de extraiga las parte numérica de una placa de un auto.

let placa = "AAA-2883"
let Numero = placa.indexOf('-')

alert(placa.slice(Numero+1));