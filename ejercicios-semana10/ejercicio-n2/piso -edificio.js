'use stric'

// Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el formato de numeración de las oficinas  es:
//  “01.24” lo que significa piso 1 oficina 24.


let pisoOficina = "01.30"
let piso = pisoOficina.substring(0,2);
let oficina = pisoOficina.substring(2,4+1);
alert (("El piso es: "+piso)+ (""+oficina));
