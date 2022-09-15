import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoItemsComponent,
    PipesTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
