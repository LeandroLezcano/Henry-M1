"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // Necesito separar los datos

 /* const arreglo = num.split("") // []
  let resultadoFinal = 0
  // por cada uno voy a hacer una operacion matematica
  for (let i = 0; i < arreglo.length; i++){
  // voy a sumar el resultado final
    resultadoFinal = resultadoFinal + arreglo[i] * Math.pow(2, arreglo.length - 1 - i)

  } 
  
  return resultadoFinal
*/
  var array = num.split("")
  var suma = 0
  for (var i=0; i<array.length; i++){
    suma = suma + Math.pow(2,array.length-1-i) * array[i]
  }
  return suma
}

function DecimalABinario(num) {
  // tu codigo aca
  var array = []
  while (num>0) {
    array.unshift(num%2)
    num = Math.floor(num/2)
  }
  return array.join("")
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
