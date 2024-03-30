function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:

  var element = 0
  for (let index = 1; index <= n; index++) {
    element = element + index;
  }
  return element
}


// var r = 0 

// for (let i = 1; i <= n; i++){
//   r = r + i
// }
// return r
// }

module.exports = sumarHastaN;
