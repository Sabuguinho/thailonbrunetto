import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'cadastro-two',
    styleUrls: ['cadastro-two.scss'],
    templateUrl: 'cadastro-two.html'
})
export class Cadastro2{

    public codigo:number;
    public nome:string;
    public ativo:boolean;
    public descricao:string;

    constructor(private router: Router){
    }        
}