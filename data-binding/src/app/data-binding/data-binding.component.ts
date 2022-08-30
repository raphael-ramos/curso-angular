import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.groner.com';
  urlImagem= 'https://placeimg.com/400/200/nature'

  cursoAngular = true;

  valorAtual:string='';
  valorSalvo = '';

  isMouseOver: boolean = false;

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

  constructor() { }

  ngOnInit(): void {
  }

}
