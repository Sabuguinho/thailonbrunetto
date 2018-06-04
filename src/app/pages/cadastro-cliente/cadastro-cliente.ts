import { Component } from '@angular/core';
import { Cliente } from './../../model/cliente';
import { Router } from '@angular/router';
@Component({
    selector: 'cadastro-cliente',
    styleUrls: ['cadastro-cliente.scss'],
    templateUrl: 'cadastro-cliente.html'
})
export class CadastroCliente{

    public cliente:Cliente = new Cliente();
    
    constructor(private router:Router){
        
    }

    public salvar(){
        console.log(this.cliente);
        this.irParaPrincipal();
    }

    public cancelar(){
        this.irParaPrincipal();
    }

    public irParaPrincipal(){
        this.router.navigate(['principal']);
    }
}