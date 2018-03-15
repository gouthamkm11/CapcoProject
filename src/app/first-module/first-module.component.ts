import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-module',
  templateUrl: './first-module.component.html',
  styleUrls: ['./first-module.component.css']
})
export class FirstModuleComponent  {
  colspan1:number = 1
  rowspan1:number = 1
  colspan2:number = 1
  rowspan2:number = 1
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
