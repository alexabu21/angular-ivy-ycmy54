import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import{ MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterComponent } from './register/register.component';
import { from } from 'rxjs';

@NgModule({
  imports:      [ BrowserModule, FormsModule,MatInputModule,MatSelectModule, BrowserAnimationsModule  ],
  declarations: [ AppComponent, HelloComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

 }
