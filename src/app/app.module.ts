import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { IndiCardComponent } from './indi-card/indi-card.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ReadModuleModule } from './read-module/read-module.module';
// // import { ReadComponent } from './read-module/read/read.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    IndiCardComponent,
    DeleteDataComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReadModuleModule
    CommonModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
