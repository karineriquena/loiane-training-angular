import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  url = 'http://github.com/karineriquena';
  cursoAngular = true;
  urlImagem = 'http://lorempixel.com.br/500/400/?';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver = false;
  nome = 'abc';

  nomeDoCurso = 'Angular';
  valorInicial = 15;

  pessoa: any = {
    nome: 'Karine',
    idade: 25,
  };

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  getUrlImageRandom() {
    return this.urlImagem + Math.random();
  }

  botaoClicado() {
    alert('botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }

  constructor() {}

  ngOnInit(): void {}
}
