import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CharsheetComponent } from './charsheet/charsheet.component';
import { MapComponent } from './map/map.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BestiaryComponent } from './bestiary/bestiary.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    MainpageComponent,
    CharsheetComponent,
    HomeComponent,
    MapComponent,
    BestiaryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class ModulesModule {
  
 }
