import { Aluno } from './aluno.js';

const aluno1 = new Aluno("Mateus", "Alves");

/* Podemos acesar atributo comouns de forma direta
aluno1.nome = "Spider";
aluno1.sobreNome = "Man";
 */

/* Forma errada de acessar o atributo privado
aluno1._cpf = 121212121; */

//Forma correta de acessar o atributo privado com o set
aluno1.inseriCpf = "123344-444";


console.log(aluno1.inseriCpf);