import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadModuleModule } from './read-module/read-module.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReadModuleModule
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
