// função para encontrar número desemparelhado dentro de um determinado array

const find_unpaired_number = (arr) => {
  // loop para fazer a iteração
  for (let i = 0; i <= arr.length; i++) {
    // faz a contagem da quantidade de cada número que contém no array
    let count_number = arr.filter((x) => x == arr[i]).length;
    // verifica se a contagem é impar e retorna o número
    if (count_number % 2 != 0) {
      return arr[i];
    }
  }
};
