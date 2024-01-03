const usuario = {
  nome: "daniel",
  idade: 50,
  endereco: {
    rua: "bahia",
    numero: 7,
    bairro: "sao geraldo",
    cep: {
      codigo: "35617-000",
      cidade: "Serra da Saudade",
    },
    mostraCidade() {
      return this.cep.cidade;
    },
  },
};

console.log(usuario.endereco.mostraCidade?.());
