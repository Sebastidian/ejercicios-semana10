
' use stric'

// Desarrollar un programa que genere la asignación de letras para las filas de computadoras en un laboratorio. 
// Se debe tener en cuenta que la codificación sigue el formato LAB2#A, donde indica la fila A del laboratorio 2


function asignaciónLetras (lab){
    let fCorrecto = /^LAB\d#([A-Z])$/.test(lab);


    if (fForrecto) {
        let Fila = lab.charAt(lab.length - 1);
        let letra = String.fromCharCode(Fila.charCodeAt(0) + 1 );

        return Letra;
    } else {
        return "formato incorrecto. Favor, ingrese uno valido"
    }
}

let entrada = "LAB2#B";
let resultado = asignaciónLetras ( entrada);
alert (resultado);




// function generarAsignacion(codigoLab) {
//     // Verificar que el formato sea correcto
//     let formatoCorrecto = /^LAB\d#([A-Z])$/.test(codigoLab);
  
//     if (formatoCorrecto) {
//       // Extraer la letra de la fila y convertirla a su siguiente letra
//       let letraFila = codigoLab.charAt(codigoLab.length - 1);
//       let siguienteLetra = String.fromCharCode(letraFila.charCodeAt(0) + 1);
  
//       // Devolver el resultado
//       return siguienteLetra;
//     } else {
//       // Devolver un mensaje de error si el formato no es correcto
//       return "Formato incorrecto. Por favor, ingresa un código válido.";
//     }
// }
  
//   // Ejemplo de uso
//   let entrada = "LAB2#B";
//   let resultado = generarAsignacion(entrada);
//   alert(resultado); // Salida: "C"