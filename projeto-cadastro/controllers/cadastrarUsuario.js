 function cadastroPessoal (nome, idade) {
   if (nome == "" || idade <= 0)
    console.log("Erro: Nome e idade são obrigatórios para o cadastro!")
else {
    console.log("Usuário cadastrado com sucesso!\n" + "Nome: " + nome + "\nIdade " + idade)
}
 }

 module.exports = cadastroPessoal