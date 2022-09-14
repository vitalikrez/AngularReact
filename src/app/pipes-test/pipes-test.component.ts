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
      <div>{{pi | number:'3.5-5':'de'}}</div>

      <div>{{money | currency:'USD'}}</div>
      <div>{{money | currency:'UAH'}}</div>
      <div>{{money | currency:'UAH':'code'}}</div>
      <div>{{money | currency:'UAH':'symbol-narrow'}}</div>
      <div>{{money | currency:'UAH':'symbol':'1.1-1'}}</div>
      <div>{{money | currency:'UAH':'symbol-narrow':'1.1-1'}}</div>
      <div>{{money | currency:'UAH':'Грн.'}}</div>

      <div>{{a | percent}}</div>
      <div>{{b | percent}}</div>
      <div>{{c | percent}}</div>
      <div>{{d | percent}}</div>
      <div>{{b | percent:'3.3-5'}}</div>
      <div>{{b | percent:'3.3-5':'de'}}</div>

      <div>From object: {{dateObject | date}} </div>
      <div>From string: {{dateString | date}} </div>
      <div>From number: {{dateNumber | date}} </div>

      <div>ShortDate: {{dateObject | date:'shortDate'}} </div>
      <div>MediumDate: {{dateObject | date:'mediumDate'}} </div>      
      <div>LongDate: {{dateObject | date:'longDate'}} </div>

      <div>CustomDate: {{dateObject | date:'dd-MM-yyy'}} </div>
      <div>UTC: {{dateObject | date:'dd-MM-yyy':"UTC"}} </div>

      <div>{{str2 | slice:6:11 | uppercase}}</div>

  `,
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {
  str = 'Hello World!';
  str2 = 'London is the capital of Great Britain';
  num = 0.14;
  pi = 3.1415;
  money = 23.45;
  a = 0.259;
  b = 0.4;
  c = 0.8;
  d = 1.5;

  dateObject: Date = new Date(2022,8,14);
  dateString = '2022-09-14T00:00:00.000Z';
  dateNumber = 1722156800000;

  constructor() { }

  ngOnInit(): void {
  }

}
