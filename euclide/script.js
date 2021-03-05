const find_wrapper = (arr, wrapper) => {
  // loop para fazer a iteração
  for (number of arr) {
    // compara se o chocolate que vai ser consumido é uma embalagem
    if (number == wrapper) {
      return true;
    }
  }
  return false;
};

const count_number_of_chocolates_that_will_eat = (n, m) => {
  let chocolates_consumed = [0]; // chocolates que foram consumidos
  let omitted_chocolate = m - 1;
  let x = 0; // chocolate que vai ser consumido

  let i = 0;  // iterador
  let is_wrapper = false;

  while (is_wrapper == false) {
    if (i == omitted_chocolate) {
      x = i + 1;

      // adicionar o primeiro chocolate no array
      if (chocolates_consumed.length == 1) {
        chocolates_consumed.push(x);
      }

      chocolate = (x + m) % n;

      // verificar se o chocolate é uma embalagem
      is_wrapper = find_wrapper(chocolates_consumed, chocolate);

      // consume o chocolate e adiciona no array
      if (is_wrapper == false) {
        chocolates_consumed.push(chocolate);
        omitted_chocolate += m;
      }
    }
    i++;
  }

  return chocolates_consumed.length;
};

