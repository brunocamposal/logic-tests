// função para encontrar a quantidade de números únicos que contém no array, sem contar números repetidos

const find_unrepeated_numbers = (arr) => {
  // array para adicionar números não repetidos
  let unrepeated_numbers = [];
  // adicionado primeiro valor no array para ter um valor inicial de comparação
  unrepeated_numbers.push(arr[0]);

  // loop para fazer a iteração
  for (let i = 1; i <= arr.length - 1; i++) {
    // compara se o número já existe
    if (unrepeated_numbers.includes(arr[i]) == false) {
      // adiciona os números não repetidos
      unrepeated_numbers.push(arr[i]);
    }
  }

  // retorna o tamanho do array
  return unrepeated_numbers.length;
};
