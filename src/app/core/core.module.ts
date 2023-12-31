import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class CoreModule {

}
