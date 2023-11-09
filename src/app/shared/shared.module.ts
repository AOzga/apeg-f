import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProgressdirectiveDirective } from './progressdirective.directive';



@NgModule({
  declarations: [
    SpinnerComponent,
    ProgressdirectiveDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[SpinnerComponent, ProgressdirectiveDirective]
})
export class SharedModule { }
