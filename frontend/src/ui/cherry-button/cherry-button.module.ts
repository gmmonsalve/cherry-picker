import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CherryButtonDirective } from './cherry-button.directive';



@NgModule({
  declarations: [
    CherryButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [CherryButtonDirective]
})
export class CherryButtonModule { }
