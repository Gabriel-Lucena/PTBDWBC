function exibirDadosAluno(nome, nota1, nota2) {
  let multiplicacaoNota1 = nota1 * 0.6;
  let multiplicacaoNota2 = nota2 * 0.4;

  let notaTotal = multiplicacaoNota1 + multiplicacaoNota2;

  alert(`Aluno: ${nome}\nNota 1: ${nota1}\nNota 2: ${nota2}`);
  alert(`Nota Total de ${nome}: ${notaTotal.toFixed(2)}`);
}

var alunos = [{
    nome: "João da Silva",
    nota1: 7,
    nota2: 8.5
  },
  {
    nome: "Maria Oliveira",
    nota1: 9,
    nota2: 7.5
  },
  {
    nome: "Carlos Pereira",
    nota1: 6.5,
    nota2: 8
  }
];

alunos.forEach(aluno => {
  exibirDadosAluno(aluno.nome, aluno.nota1, aluno.nota2);
});