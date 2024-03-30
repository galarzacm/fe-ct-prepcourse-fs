function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  while (numero > 1) {     //Ej 8 > 1 => si   | 4 > 1 => si     | 2 > 1 => si     | 1 > 1 => NO
    if (numero % 2 === 0){ // 8 % 2 = 0 => si | 4 % 2 = 0 => si | 2 % 2 = 0 => si | entonces sale del bucle
      numero = numero / 2  // 8 = 8 / 2 => 4  | 4 = 4 / 2 => 2  | 2 = 2 / 2 => 1  | y retorna true

      } else return false
    
  }
  return true


// if (numero < 1) return false
// if (numero === 1) return true

// var i = 1;
// while (Math.pow(2,i) <= numero) { 
//   if (Math.pow(2,i) === numero) return true
//   i++;
// }
// return false

}

module.exports = esPotenciaDeDos;