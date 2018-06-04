import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Anderson Rodrigues de Almeida';
  public nome:string = "";
  public numero1: number = 0;
  public numero2: number = 0;
  //utiliza o | para definir uma variável com mais de 1 tipo
  public resultado: number|string|any = 0;
  public operacao: string ='+';
  public acumula: number = 1;
  public valor: number =0;

  public mostrar(){
    console.log(this.nome);
    alert(this.nome);
    alert('Até aqui tudo funcionando!');
  }

  public calcular(){
    switch(this.operacao){
      case '+':
        this.somar();
        break;
      case '-':
        this.subtrair();
        break;
      case '*':
        this.multiplicar();
        break;
      case '/':
        this.dividir();
        break;
    }
  }

  public calcularFatorial(){
    this.acumula = parseFloat(this.acumula+"");
    this.valor = parseFloat(this.valor+"");
    if (this.valor < 0){
      alert('Valor deve ser maior ou igual a zero!')
    }else if ((this.valor == 0) || (this.valor == 1)){
     this.resultado =  1;
    }else{
    for (let i=this.valor; i>1; i--){
      this.acumula = this.acumula * i;
    }
      this.resultado = this.acumula;      
   } 
  } 

  public somar(){
    this.resultado = parseFloat(this.numero1+"") + parseFloat(this.numero2.toString());
  }

  public multiplicar(){
    this.resultado = parseFloat(this.numero1+"") * parseFloat(this.numero2+"");
  }

  public subtrair(){
    this.resultado = parseFloat(this.numero1+"") - parseFloat(this.numero2+"");
  }

  public dividir(){
    this.resultado = parseFloat(this.numero1+"") / parseFloat(this.numero2+"");
  }


}

