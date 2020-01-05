import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { skills } from './skills';
import { stats } from './stats';
import { skill } from './skill';
import { stat } from './stat';

@Injectable({
  providedIn: 'root'
}) 
export class ModManagementService {
  
  constructor() {

   }

todoProf = 3;
//initilise data with data from import
  
  getSkills(): Observable<skill[]>{
    return of(skills);
  }

  getStats(): Observable<stat[]>{
    return of(stats);
  }

  statUpdate(kind, newVal){
    let tempKind;
    let tempMod;
    stats.forEach(function(obj){
      if(obj.kind==kind){
        obj.value=newVal;
        obj.mod = Math.floor((newVal-10)/2);

        //saving throw changes
        if(obj.savProf)
          obj.savMod = obj.mod + 3;
        obj.savMod = obj.mod;
      //call to update skill modifiers
      tempKind = kind;
      tempMod = obj.mod;
      }
    }); 
    this.skillModUpdate(tempKind,tempMod,false); 
  }

  toggleSkillProf(skillName){
    let tempKind;
    let tempMod;
    skills.forEach(function(obj){
      if(obj.name==skillName){
        switch(obj.profLvl){
          case 0: obj.profLvl++;
          break;
          case 1: obj.profLvl++;
          break;
          default: obj.profLvl=0;
        }
        tempKind = obj.kind;
        tempMod = obj.mod;
      }
    })
    this.skillModUpdate(tempKind, tempMod, true);
  }
  toggleStatProf(kind: string){
      stats.forEach(function(obj){
        if(obj.kind==kind){
          if(!obj.savProf)
            obj.savMod = obj.mod + 3;
          else
            obj.savMod = obj.mod;
        obj.savProf = !obj.savProf;
        }
      })
    }
  

  savProfUpdate(index, nSavMod){
    /* needs to change setting of savProf and savMod
    if newVal = true + prof
    if newVal = false + prof 
    */
  }

    skillModUpdate(kind: string, newMod: number, profToggle: boolean){
    let tempMod = newMod;
    if(profToggle){
      stats.forEach(function(obj){
        if(obj.kind==kind)
          tempMod = obj.mod;
      })
    }

    skills.forEach(function(obj){
      if(obj.kind==kind){
        switch(obj.profLvl){
          case 0: obj.mod = tempMod;
          break;
          case 1: obj.mod = tempMod + 3;
          break;
          case 2: obj.mod = tempMod + 6;
          break;
          default: obj.profLvl=0;
        }
      }
    })
  }
  
}