function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:

   resultado = 0
   for (let i = 0; i <= n; i++) {
      resultado = resultado + i;
      if (resultado > 100) //el condicional dentro del bucle
      break;
      //return resultado     // tambien la devolucion en caso de cumplirse la condicion
   }
   return resultado


}

module.exports = sumarHastaNConBreak;
