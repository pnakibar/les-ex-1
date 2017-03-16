export default function calculaImposto(valor) {
  if (valor < 0) throw new Error('Valor deve ser acima de 0');

  if (valor < 1710.79) {
    return 0;
  }
  if (valor < 2563.92) {
    return 7.5;
  }
  if (valor < 3418.60) {
    return 15;
  }
  if (valor < 4271.60) {
    return 22.5;
  }
  return 27.5;
}
