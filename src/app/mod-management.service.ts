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

   skillProfUpdate(index, nProfLvl){
    /* needs to change setting of skillMod 
    if newVal = 0 - 2*prof
    if newVal = 1 + prof 
    if newVal = 2 + prof
    */
    this.skills.forEach(function(obj){
      if(obj.name==index){
        switch(nProfLvl){
          case 0: obj.mod = obj.mod - (2*this.todoProf);
          break;
          case 1: obj.mod = obj.mod + this.todoProf;
          break;
          case 2: obj.mod = obj.mod + this.todoProf;
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

  statUpdate(index, nStatVal){
    
  }
}