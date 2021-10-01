import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DotsPipe } from './dots.pipe';



@NgModule({
  declarations: [
    DotsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DotsPipe
  ]
})
export class PipModule { }
