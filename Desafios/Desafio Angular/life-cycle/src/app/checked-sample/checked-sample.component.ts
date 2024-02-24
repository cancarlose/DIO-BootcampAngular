import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-checked-sample',
  templateUrl: './checked-sample.component.html',
  styleUrls: ['./checked-sample.component.css']
})
export class CheckedSampleComponent implements OnInit, DoCheck, AfterContentChecked,AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy {

  quantidade:number = 0

  constructor() {
    console.log("constructor");
  }

  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -= 1
  }

  // checked -> content -> view

  // Quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  // Depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  // Após alguma alteração, verifica conteúdo
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  // Após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend");
  }

}
