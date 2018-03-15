import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FirstModuleComponent } from './first-module/first-module.component';
import { SecondModuleComponent } from './second-module/second-module.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstModuleComponent,
    SecondModuleComponent,
  ],
  imports: [
    BrowserModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
