import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { MapComponent } from './map/map.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
  
    LoginComponent,
    MainpageComponent,
    CharsheetComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class ModulesModule { }
