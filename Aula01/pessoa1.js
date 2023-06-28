//Criar uma classe pessoa. 
    //A pessoa deverá falar seu nome e sua idade  
class Pessoa{
    //Atributos
    nome; 
    idade;

    //Métodos - Realiza um ação
    falaNome(){
        //Utulizar no metodo o return
        return this.nome;
    }

    falarIdade(){
        return this.idade;
    }
}

//Vamos usar o molde - Instanciar a classe
const aluno = new Pessoa();
aluno.nome = "Marcos Silva";
aluno.idade = 37;

console.log("Nome: " + aluno.falaNome());
console.log("Idade: " + aluno.falarIdade());