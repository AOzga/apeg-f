import { Component, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService, User } from '@auth0/auth0-angular';
import { HostListener } from '@angular/core';
import { SharedDataService } from './core/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'apeg';




  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService,private sharedDataService: SharedDataService) { }

  
  ngOnInit(): void {
    this.auth.getAccessTokenSilently()
    this.auth.getAccessTokenSilently().subscribe(n => { console.log(n); this.sharedDataService.fetchAndStoreData() })
    
  }
}
