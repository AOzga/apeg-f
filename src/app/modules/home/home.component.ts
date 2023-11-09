import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public explanation = ""
  public explanation_title = ""
  public flavortext = ""
  public lastexp = ""
  public currexopt=""
  constructor(public auth: AuthService) { }

  setpreviousexplain() {
    if (!this.lastexp) {
      this.explanation = ""
      this.explanation_title = ""
      this.flavortext=""
    } else {
      
    this.setexplain(this.lastexp)
    }
  }

  setexplain(exopt: any) {
    this.lastexp=this.currexopt
    this.currexopt = exopt
    
    if (exopt == 'bastion') {
      this.explanation_title = 'Bastion'
      this.explanation = 'Bastion jest to swiat w ktorym zyjemy, jest to caly wrzechswiat, jak i miejsce waszej podrozy.'
      this.flavortext = "'Czemu bastion? juz chyba cos takiego istnieje' \n ~ Bezdomny z rin, 13 lat temu przed egzekucja"
    }

    if (exopt == 'magia') {
      this.explanation_title = 'Magia'
      this.explanation = 'Magia jest to sila nadprzyrodzona pozwalajaca zmaterializowac rzeczy, moce czy nawet ja sama w naszym swiecie, nie wiadomo jakim kosztem.'
      this.flavortext = "Hokus kuyrwa pokus"
    }
    if (exopt == 'zlote') {
      this.explanation_title = 'Złote'
      this.explanation = 'Taki kolor, jak zęby starego szczura, lądowego czy tam morskiego'
      this.flavortext = "Pewne osoby to złotokopacze"
    }
    if (exopt == 'prima') {
      this.explanation_title = 'Prima'
      this.explanation = 'Jest to kontynent można by rzec na środku świata, więc jest miejscem najbardziej różnorodnym w faunę, języki, gatunki, zwyczaje, mordy, bójki i przekręty.\Jego stolicą jest Rin\nW Primie co 30 lat, w turnieju boga Melfisa, wyłaniany jest najznakomitszy wojownik, który potem ma możliwość dołączenia do straży królewskiej. \n\n Prima była kiedyś jedynie zamieszkiwana przez Alametów, starożytny ród z którego wywodzi się bezpośrednio człowiek oraz elf. Teraz zamieszkują ją wszystkie gatunki które sobie tego życzą.'
      this.flavortext = "'Kiedyś to było' \n ~ Alameta, gdyby żył w tych czasach"
    }
    if (exopt == 'eoria') {
      this.explanation_title = 'Eoria'
      this.explanation = 'Eoria jest państwem które dostało miano kontynentu, ze względu na swoją siłę bojową.\n Jest to miejsce zamieszkiwane głównie przez ludzi którzy brudzą sobie ręce magią. \n Z Tego też względu wybudowany tu został magiczny uniwersytet.'
      this.flavortext = "Pewne osoby to złotokopacze"
    }

  }

}