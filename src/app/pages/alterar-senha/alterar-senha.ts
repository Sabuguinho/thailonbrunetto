import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'alterar-senha',
    styleUrls: ['alterar-senha.scss'],
    templateUrl: 'alterar-senha.html'
})
export class AlterarSenha{

    public usuario:string;
    public senhaAtual:string;
    public novaSenha:string;
    public confirmeSenha:string;

    constructor(private router: Router){

    }

    public alterar(){
        let user = {
            usuario:this.usuario,
            senha:this.novaSenha
        }
        console.log(user);
        this.irParaPrincipal();
    }

    /**
     * Desenvolver função para botão de Cancelar
     */
    public cancelar(){
        console.log('foi cancelado');
        this.irParaPrincipal();
    }

    public irParaPrincipal(){
        this.router.navigate(['principal']);
    }
}