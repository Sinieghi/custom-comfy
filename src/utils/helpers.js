export const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number / 100);
  return newNumber;
};

export const getUniqueValues = (data, type) => {
  //o parametro dessa var é um map, ou seja, qualquer array que entrar aqui toma o map, e o type é o valor do objeto
  let unique = data.map((item) => item[type]);

  //como a category colors é um objeto com um array, vc tem de rodar esse flat para acessar os valores da prop
  if (type === "colors") {
    unique = unique.flat();
  }
  //aqui retorna de forma dinamica somente a categia especificada, que no caso é o valor que a unique carrega
  return ["all", ...new Set(unique)];
};
