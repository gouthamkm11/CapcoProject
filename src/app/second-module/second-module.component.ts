import { Component } from '@angular/core';

@Component({
  selector: 'app-second-module',
  templateUrl: './second-module.component.html',
  styleUrls: ['./second-module.component.css']
})
export class SecondModuleComponent {
  colspan1:number = 1
  rowspan1:number = 1
  colspan2:number = 2
  rowspan2:number = 2
  colspan3:number = 1
  rowspan3:number = 1

  fireEvent1(){
    this.colspan1 = 2;
    this.rowspan1 = 2;
    this.colspan2 = 1;
    this.rowspan2 = 1;
    this.colspan3 = 1;
    this.rowspan3 = 1;
  }

  fireEvent2(){
    this.colspan1 = 1;
    this.rowspan1 = 1;
    this.colspan2 = 2;
    this.rowspan2 = 2;
    this.colspan3 = 1;
    this.rowspan3 = 1;
  }

  fireEvent3(){
    this.colspan1 = 1;
    this.rowspan1 = 1;
    this.colspan2 = 1;
    this.rowspan2 = 1;
    this.colspan3 = 2;
    this.rowspan3 = 2;
  }
}
