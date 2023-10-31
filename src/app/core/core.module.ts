import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { RectbuttonComponent } from './header/rectbutton/rectbutton.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent, RectbuttonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule {

}
