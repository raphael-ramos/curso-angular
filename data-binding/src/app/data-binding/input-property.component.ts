import { Component, Input } from '@angular/core';

@Component({
  selector: 'curso',
  template: '{{ nomeCurso }}',
})
export class InputPropertyComponent {

    @Input('nome') nomeCurso : string = '';
    constructor(){

    }

}