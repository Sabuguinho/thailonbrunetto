import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatSliderModule,
  MatButtonToggle,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CadastroCliente } from './pages/cadastro-cliente/cadastro-cliente';
import { AlterarSenha } from './pages/alterar-senha/alterar-senha';
import { AppRouter} from './app-router';
import { Cadastro2 } from './pages/cadastro-two/cadastro-two';
@NgModule({
  declarations: [
    AppComponent,
    CadastroCliente,
    AlterarSenha,
    Cadastro2
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouter,
    MatDatepickerModule,  MatNativeDateModule,
    
    MatButtonModule, MatCheckboxModule, MatSelectModule,
    MatAutocompleteModule, MatInputModule, MatFormFieldModule,
    FormsModule,MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
