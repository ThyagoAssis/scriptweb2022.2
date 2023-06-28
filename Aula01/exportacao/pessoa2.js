//Criar uma classe pessoa. 
    //A pessoa deverá falar seu nome e sua idade  
    export class PessoaDois{
         //Método construtor - Metodo padrão de toda a classe
        constructor(nome, idade){
            this.nome = nome;
            this.idade = idade;
        }

        //Métodos - Realiza um ação
        falaNome(){
            //Utulizar no metodo o return
            return this.nome;
        }
    
        falarIdade(){
            return this.idade;
        }
    }