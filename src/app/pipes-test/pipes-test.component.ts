import { Component, OnInit } from '@angular/core';

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


  
  `,
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {

  str = 'Hello World!';
  str2 = 'London is the capital of Great Britain!'
  num = 0.14;
  pi=3.14;
  constructor() { }

  ngOnInit(): void {
  }

}
