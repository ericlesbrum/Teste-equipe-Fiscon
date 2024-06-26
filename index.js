const resposta = document.querySelector("#resposta");
const faturamentoDiarioDistribuidora = [
  0, 1540.55, 0, 3254, 2968, 75, 0, 5999.56, 0, 3412.12, 2777.77,
];

// Calcula todos os faturamentos validos, isto é, os que são acima de 0
function calcularFaturamento(faturamentoDiarioDistribuidora) {
  let faturamentoDiarioValido = null;
  let menorFaturamentoOcorrido = 0;
  let maiorFaturamentoOcorrido = 0;
  let numeroDiascomFaturamento = 0;
  let mediaAnual = 0;
  let faturamentoAcimaMedia = 0;
  faturamentoDiarioValido = faturamentoDiarioDistribuidora.filter(
    (valor) => valor > 0
  );

  // Calcula o maior e menor valor de faturamento ocorrido
  menorFaturamentoOcorrido = Math.min(...faturamentoDiarioValido);
  maiorFaturamentoOcorrido = Math.max(...faturamentoDiarioValido);

  // Calcula a média anual de faturamento superior a média atual
  somaFaturamentos = faturamentoDiarioValido.reduce(
    (valorAcumulado, valorAtual) => valorAcumulado + valorAtual,
    0
  );
  numeroDiascomFaturamento = faturamentoDiarioValido.length;
  mediaAnual = somaFaturamentos / numeroDiascomFaturamento;

  faturamentoAcimaMedia = faturamentoDiarioValido.filter(
    (valor) => valor > mediaAnual
  ).length;
  return `
        Valores de referência : [${faturamentoDiarioDistribuidora}]</br>
        Menor Faturamento: R$ ${menorFaturamentoOcorrido}</br>
        Maior Faturamento: R$ ${maiorFaturamentoOcorrido}</br>
        Dias com faturamento acima da média: ${faturamentoAcimaMedia}
    `;
}

const resultado = calcularFaturamento(faturamentoDiarioDistribuidora);
resposta.innerHTML = resultado;
