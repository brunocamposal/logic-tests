const test_count_number_of_chocolates_that_will_eat = () => {
  test_cases = [
    [10, 4, 5],
    [8, 2, 4],
    [15, 4, 15],
  ];

  for (test_case of test_cases) {
    result = count_number_of_chocolates_that_will_eat(
      test_case[0],
      test_case[1]
    );
    expected = test_case[2];
    console.assert(
      result === expected,
      `A resposta da função não está retornando corretamente. Esperado: ${expected}, Retornado: ${result} `
    );
  }
};

test_count_number_of_chocolates_that_will_eat();
