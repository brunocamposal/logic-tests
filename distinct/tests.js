const test_find_unrepeated_numbers = () => {
  test_cases = [
    [[2, 1, 1, 2, 3, 1], 3],
    [[3, 2, 7, 8, 8, 5], 5],
    [[2, 6, 9, 10, 6, 2, 9], 4],
  ];

  for (test_case of test_cases) {
    result = find_unrepeated_numbers(test_case[0]);
    expected = test_case[1];
    console.assert(
      result === expected,
      `A resposta da função não está retornando corretamente. Esperado: ${expected}, Retornado: ${result} `
    );
  }
};

test_find_unrepeated_numbers();
