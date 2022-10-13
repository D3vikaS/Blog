import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadModuleRoutingModule } from './read-module-routing.module';
import { ReadComponent } from './read/read.component';


@NgModule({
  declarations: [
    ReadComponent
  ],
  imports: [
    CommonModule,
    ReadModuleRoutingModule
  ],
  // exports:[
  //   ReadComponent
  // ]
})
export class ReadModuleModule { }
