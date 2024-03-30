function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  var x = 0;
  var y = string.length - 1;

  if (string[x] !== string[y]) return false;

  while (string[x] > string[y]) {
    x++;
    y--;
  }
  return true;
}

module.exports = esPalindromo;
