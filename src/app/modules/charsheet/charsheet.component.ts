import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { catchError, map, tap } from 'rxjs/operators';
import { SharedDataService } from 'src/app/core/data.service';
import { Race, CharacterClass, LevelMeta, CalcStat, Stats, Condition, Health, Quest, GMeta, Equipment, Active, Passive, PlayerChar } from 'src/app/shared/interfacesz';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss'],
  animations:[trigger('showyass', [transition(':enter', [style({ opacity: 0 }),animate('250ms', style({ opacity: 1 })),]),transition(':leave', [animate('0ms', style({ opacity: 0 }))])]),]
})
  
  
export class CharsheetComponent implements OnInit {

  playerForm:FormGroup

  constructor(private fb: FormBuilder, private sharedDataService: SharedDataService) {this.playerForm = this.fb.group({
    name: [''],
    nickname: [''],
    race:[],
    characterClass:[],
    bio: [''],
  });}
  


  races: Race[] = []
  classes: CharacterClass[] =[]

 

  ngOnInit(): void {

    this.sharedDataService.postac$.subscribe((data) => {
      this.playerchar=data
    })

    this.sharedDataService.races$.subscribe((data) => {
      this.races = data;
    });

    this.sharedDataService.classes$.subscribe((data) => {
      this.classes = data;
    });
  }



  onSubmit() {
    if (this.playerForm.valid) {
      this.sharedDataService.sendCharPar(this.playerForm.getRawValue());
    } else {
      const array = ["Co ty...","Postaraj sie!","WYBIERZ COS","Nosz kurwa, ile razy...","xd serio?","watafak dud","sick shit","teraz to sie pierdol","jakcostotylkoterazpajacuje","potem juz nie bede"]
      this.pszczulka = array[Math.floor(Math.random() * array.length)]
    }
    
  }


  public shownpane = '';
  public showbio = false;
  public showactives = true;
  public showstats = true;
  formdata:any;
  public playerchar: any;
  public pszczulka= "Hej! Opisz sie!";
  
  showtooltip() {
    
  }

  returnZero() {     return 0;     } 

  showdivname(name: string) {
    if (this.shownpane == name){
      this.shownpane = '';
    } else{
      this.shownpane = name}
  }
  togglebio() {
    this.showbio = !this.showbio
  }
  psv(bul:boolean) {
    this.showactives=bul
  }
  sts(bul:boolean) {
    this.showstats=bul
  }

  removepoint(stat: string | any) {
    if (stat){
    (this.playerchar.stats as any)[stat] -= 1 
    }
  }
  addPoint(stat: string | any) {
    if (stat){
    (this.playerchar.stats as any)[stat] += 1 
    }
  }

}
