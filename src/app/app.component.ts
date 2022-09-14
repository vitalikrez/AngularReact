import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List';
  title2 = 'To Do List2';
  name = 'Vitaliy Rez'
  
  getTitle (){
    return this.title;
  }

  getName(){
    return this.name;
  }
}
