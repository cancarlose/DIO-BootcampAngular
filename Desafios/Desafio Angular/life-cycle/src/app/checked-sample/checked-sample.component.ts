import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-checked-sample',
  templateUrl: './checked-sample.component.html',
  styleUrls: ['./checked-sample.component.css']
})
export class CheckedSampleComponent implements OnInit, DoCheck, AfterContentChecked,AfterContentInit, AfterViewChecked, AfterViewInit {

  constructor() {

  }

  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(): void {

  }
  ngAfterContentInit(): void {

  }
  ngAfterContentChecked(): void {

  }
  ngDoCheck(): void {

  }

  ngOnInit(): void {
  }

}
