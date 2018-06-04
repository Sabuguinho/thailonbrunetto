import {Router, Routes, RouterModule } from '@angular/router';
import {CadastroCliente} from './pages/cadastro-cliente/cadastro-cliente';
import {NgModule} from '@angular/core';
import {AlterarSenha} from './pages/alterar-senha/alterar-senha';
import {Cadastro2} from './pages/cadastro-two/cadastro-two';

export const appRoutes: Routes = [
    {
        path: 'cadastro-cliente',
        component: CadastroCliente
    },
    {
        path: 'alterar-senha',
        component: AlterarSenha
    },
    {
        path: 'cadastro-two',
        component: Cadastro2
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRouter{ 

    constructor(router: Router){

    }
}