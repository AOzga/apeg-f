export interface Race {
  id:number,
    name: string;
    racestat: string;
  }
  
export interface CharacterClass {
    id:number,
    name: string;
    mainstat: string;
    substat: string;
  }
  
  export interface LevelMeta {
    level: number;
    exp: number;
    nextlevel: number;
  }
  
  export interface CalcStat {
    dmg: number;
    crtd: number;
    crtc: number;
    arm: number;
    mres: number;
    magamp: number;
  }
  
  export interface Stats {
    str: number;
    agi: number;
    int: number;
    div: number;
    cns: number;
    cha: number;
    luk: number;
  }
  
  export  interface Condition {
    name: string;
    img: string;
    description: string;
  }
  
  export  interface Health {
    curr: number;
    max: number;
  }

export interface Quest {
  name: boolean;
  darkquest: boolean;
  done: boolean;
}

  
  export interface GMeta {
    info: string;
  }
  
  export interface Equipment {
    slots: {
      head: null | any;
      body: null | any;
      legs: null | any;
      weapon: null | any;
      ring1: null | any;
      ring2: null | any;
      offhand: null | any;
    };
    bag: any[];
  }
  
  export interface Active {
    name: string;
    img: string;
    type: string;
    school: string;
    basedamage: number;
    effect: string;
  }
  
  export interface Passive {
    img: string;
    name: string;
    proficiency: number;
  }
  
  export interface PlayerChar {
    remake: boolean;
    name: string;
    nickname: string;
    race: Race;
    class: CharacterClass;
    levelmeta: LevelMeta;
    calcstat: CalcStat;
    stats: Stats;
    conditions: Condition[];
    health: Health;
    gold: number;
    bio: string;
    quests: Quest[];
    gmeta: GMeta;
    equipment: Equipment;
    actives: Active[];
    passives: Passive[];
}
export interface PlayerCharMinLogin{
  name: string;
  nickname: string;
  race: Race;
  class: CharacterClass;
  bio?: string;
  }