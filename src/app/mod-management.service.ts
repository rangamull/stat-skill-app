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
    stats.forEach(function(obj){
      if(obj.kind==kind){
        obj.value=newVal;
        obj.mod = Math.round((newVal-10)/2);
      }
    });  
  }

  toggleSkillProf(skillName){
    skills.forEach(function(obj){
      if(obj.name==skillName){
        switch(obj.profLvl){
          case 0: obj.profLvl++;
          break;
          case 1: obj.profLvl++;
          break;
          default: obj.profLvl=0;
        }
      }
    })
  }

  savProfUpdate(index, nSavMod){
    /* needs to change setting of savProf and savMod
    if newVal = true + prof
    if newVal = false + prof 
    */
  }

  
}