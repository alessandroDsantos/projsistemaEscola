import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-view2-incluir',
  templateUrl: './view2-incluir.component.html',
  styleUrls: ['./view2-incluir.component.css']
})
export class View2IncluirComponent {
  onSubmit(form: NgForm) {
    let dados = `
    Nome: ${form.value.nome}
    Telefone: ${form.value.telefone}
    Endereço: ${form.value.endereco}`;

    console.log(dados);
  }
}
