function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  var r = 1 

  for (let i = a; i <= b; i++){
    r = r * i
  }
  if (r === -0) return 0
  return r
}

// var resultadoMultiplicacion = 1 => dado que todo n * 0 = 0

// for (var i = a; i <= b; i++) {
//   resultadoMultiplicacion = resultadoMultiplicacion * i

// }
// if (resultadoMultiplicacion === -0) return 0 
// return resultadoMultiplicacion
// }








module.exports = productoEntreNúmeros;