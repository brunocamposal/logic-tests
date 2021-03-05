const test_find_unpaired_number = () => {
  test_cases = [
    [[9, 3, 9, 3, 9, 7, 9], 7],
    [[2, 5, 2, 5, 8, 4, 8], 4],
    [[1, 2, 1, 2, 3], 3],
  ];

  for (test_case of test_cases) {
    result = find_unpaired_number(test_case[0]);
    expected = test_case[1];
    console.assert(
      result === expected,
      `A resposta da função não está retornando corretamente. Esperado: ${expected}, Retornado: ${result} `
    );
  }
};

test_find_unpaired_number();
