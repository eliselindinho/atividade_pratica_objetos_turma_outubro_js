let apartamento = {
  tamanho: {
    metragem: 100,
    unidadeDeMedida: "m²",
  },
  quantidadeComodos: {
    banheiro: 2,
    quartos: 3,
    sala: 1,
    cozinha: 1,
    lavanderia: 1,
    totalDeComodos: 8,
  },
  pisoFrio: true,
  tiposDeJanela: "alumínio",
  duplex: false,
  areaGourmet: true,
  valor: 650000.0,
};
console.log(apartamento);
console.log(
  "Quantidade de banheiros no apartamento: ",
  apartamento.quantidadeComodos.banheiro
);
