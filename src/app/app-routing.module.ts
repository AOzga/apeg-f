import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './modules/mainpage/mainpage.component';
import { LoginComponent } from './modules/login/login.component';
import { CharsheetComponent } from './modules/charsheet/charsheet.component';

const routes: Routes = [
  { path: 'home', component: MainpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'char', component: CharsheetComponent },
  { path: '**', component: MainpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}
)
export class AppRoutingModule { 

}
