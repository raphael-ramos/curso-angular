import { Component, NgModule, OnInit } from '@angular/core';

import { InputPropertyComponent } from './input-property.component';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})

export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.groner.com';
  urlImagem= 'https://placeimg.com/400/200/nature'

  cursoAngular = true;

  valorAtual:string='';
  valorSalvo = '';

  isMouseOver: boolean = false;

  nome: string = '';

  pessoa = {nome:'',idade:20};

  valorInicial = 15;

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true
  }

  botaoClicado(){
    alert('clicado!')
  }

  onKeyUp(event: KeyboardEvent){
    console.log(event)
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor:any){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
