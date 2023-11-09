import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, concatMap, map, tap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { PlayerChar, PlayerCharMinLogin } from '../shared/interfacesz';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private racesSubject = new BehaviorSubject<any[]>([]);
  private classesSubject = new BehaviorSubject<any[]>([]);
  private postacSub = new BehaviorSubject<any[]>([]);

  races$: Observable<any[]> = this.racesSubject.asObservable();
  classes$: Observable<any[]> = this.classesSubject.asObservable();
  postac$: Observable<any> = this.postacSub.asObservable();

  constructor(private http: HttpClient, private auth:AuthService) {}

  fetchAndStoreData() {
    this.http.get<any[]>('http://localhost:8000/api/char/advs/fetchclass/').subscribe((data) => {
      this.racesSubject.next(data);
    });

    this.http.get<any[]>('http://localhost:8000/api/char/advs/fetchrace/').subscribe((data) => {
      this.classesSubject.next(data);
    });
    
      this.http.get<any[]>('http://localhost:8000/api/char/advs/getchar/').subscribe((data) => {
        this.postacSub.next(data);
      })
  }
  
  sendCharPar(pchar: PlayerCharMinLogin){
    this.http.post('http://localhost:8000/api/char/advs/setchar/', pchar).subscribe((data) => {this.fetchAndStoreData()})
    
  }
    
    
  }
