import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './modules/mainpage/mainpage.component';
import { LoginComponent } from './modules/login/login.component';
import { CharsheetComponent } from './modules/charsheet/charsheet.component';
import { HomeComponent } from './modules/home/home.component';
import { BestiaryComponent } from './modules/bestiary/bestiary.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'char', component: CharsheetComponent },
  { path: 'mons', component: BestiaryComponent },
  { path: '', component: MainpageComponent },
  { path: '**', component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled'}),],
  exports: [RouterModule]
}
)
export class AppRoutingModule { 

}
