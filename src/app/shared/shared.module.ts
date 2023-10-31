import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlitchtextComponent } from './glitchtext/glitchtext.component';



@NgModule({
  declarations: [
    GlitchtextComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[GlitchtextComponent]
})
export class SharedModule { }
