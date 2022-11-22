import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasunoComponent } from './masuno/masuno.component';



@NgModule({
  declarations: [
    MasunoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MasunoComponent
  ]
})
export class ContadorModule { }
