import { Component, OnInit } from '@angular/core';
import  localeDe from '@angular/common/locales/de';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeDe,'de');
@Component({
  selector: 'app-pipes-test',
  template: `
  <div>uppercase: {{str | uppercase}}</div>
  <div>lowercase: {{str | lowercase}}</div>
  <div>number: {{num | number}}</div>
  <div>percent: {{num | percent}}</div>
  <div>currency: {{num | currency}}</div>
  <div>{{str2 | slice:25}}</div>
  <div>{{str2 | slice:0:6}}</div>
  <div>{{str2 | slice:-8}}</div>
  <div>{{pi | number:'3.5-5'}}</div>
  <div>{{pi | number:'2.1-2'}}</div>
  <div>{{pi | number:'2.1-2':'de'}}</div>

    <div>{{money | currency:'USD'}}</div>
    <div>{{money | currency:'UAH'}}</div>

    <div>{{money | currency:'UAH': 'symbol-narrow':'1.1-2'}}</div>
    <div>{{money | currency:'UAH': 'symbol-narrow'}}</div>

    <div>{{a | percent}}</div>
    <div>{{b | percent}}</div>
    <div>{{c | percent:'3.3-5'}}</div>

    <div>Form object{{dataObject | date</div>
    <div>Form string{{dataString | date</div>
    <div>Form number{{dataObject | date</div>


  
  `,
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {

  str = 'Hello World!';
  str2 = 'London is the capital of Great Britain!'
  num = 0.14;
  pi=3.14;
  money=100;
  a=0.2;
  b=0.4;
  c=0.5

  dataObject: Date = new Date(2022,9.14);
  dataString = '14092022';

  constructor() { }

  ngOnInit(): void {
  }

}
