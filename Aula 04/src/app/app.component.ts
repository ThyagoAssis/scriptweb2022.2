import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Variavel de controle do meu botão 
  controle = true;

  msg: string = "Data Binding";
  img: string = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg";
  descricao: string = "O data binding pega uma informação no arquivo .ts e leva para o arquivo .html";
  msgDois: string = "Event Binding";
  descricaoDois: string = "O event binding pega uma informação no arquivo .hmtl e leva para o arquivo .ts";


  ///Criando objetos
  pessoa = {
    nome: "Mario Abreu",
    idade: 56
  };

  //Array 
  pessoaCaixa = [
    {nome:  "Maria Silva", idade: 23, altura: 1.70},
    {nome: "Leo dos Anjos", idade: 56, altura: 1.80},
    {nome: "Gabi Alves", idade: 17, altura: 1.60}
  ];

  
  //Método do botão
  clicou(){
    //Melhoria de código - operador ternario

    this.controle ? this.msg = "Agora sou sou ternario" : this.msg = "Data Binding";
    this.controle ? this.img = "https://cdn.pixabay.com/photo/2023/06/24/15/04/dragonfly-8085413_640.jpg" : this.img = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg";

    return this.controle = !this.controle;

    /* if(this.controle){

      //Altera a imagem
      this.controle = !this.controle;
      this.msg = "Agora eu mudei";
      this.img = "https://cdn.pixabay.com/photo/2023/06/16/13/30/md500-8068034_640.jpg";

    }else{

      //Restaura a imagem anterior
      this.controle = !this.controle;
      this.msg = "Data Binding";
      this.img = "https://cdn.pixabay.com/photo/2023/05/15/09/18/iceberg-7994536_1280.jpg";

    } */
    
  }

  










}
