export const generateCNPJ = () => {
  const random = (n) => Math.floor(Math.random() * n);

  // Gera os 8 primeiros dígitos (base da empresa)
  const n = [];
  for (let i = 0; i < 8; i++) {
    n.push(random(10));
  }

  // Define os 4 dígitos do "ramo": geralmente 0001 para matriz
  n.push(0, 0, 0, 1);

  // Calcula os dois dígitos verificadores
  const calcDV = (base) => {
    const pesos = base.length === 12
      ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
      : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const soma = base.reduce((acc, val, i) => acc + val * pesos[i], 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const dv1 = calcDV(n);
  const dv2 = calcDV([...n, dv1]);

  const cnpjArray = [...n, dv1, dv2];
  return cnpjArray.join('');
}