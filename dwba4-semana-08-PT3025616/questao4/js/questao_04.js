class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

function mostrarDadosAlunos(alunos) {
  alunos.forEach(aluno => {
    alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media().toFixed(2)}\nSituação: ${aluno.situacao()}`);
  });
}

var alunos = [
  new Aluno("João", "da Silva", 7, 8.5),
  new Aluno("Maria", "Oliveira", 9, 7.5),
  new Aluno("Carlos", "Pereira", 6.5, 8),
  new Aluno("Ana", "Souza", 5, 6),
  new Aluno("Pedro", "Santos", 8, 9)
];

mostrarDadosAlunos(alunos);
