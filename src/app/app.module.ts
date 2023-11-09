import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ModulesModule } from './modules/modules.module';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ModulesModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-7namrc25ifklukgc.uk.auth0.com',
      clientId: '7Nfkf4gdOjakOE89twVKwMzkn6I8VHzN',

      authorizationParams: {
        audience:'http://localhost:8000/',
        redirect_uri: window.location.origin
      }
      ,
      httpInterceptor: {
        allowedList: [
          {
            uri: 'http://localhost:8000/*'
          }
        ]
      }
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  exports:[AuthModule,HttpClientModule]
}
)
export class AppModule { 
  constructor(private http: HttpClient){}
}

