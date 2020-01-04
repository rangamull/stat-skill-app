import { Component, OnInit } from '@angular/core';

import { ModManagementService } from '../mod-management.service';

@Component({
  selector: 'app-skill-block',
  templateUrl: './skill-block.component.html',
  styleUrls: ['./skill-block.component.css']
})
export class SkillBlockComponent implements OnInit {

  skills;
  constructor(
    private modManagement: ModManagementService
  ) {
     }

  ngOnInit() {
    this.getSkills();
    console.log(this.skills)
  }

  getSkills(){
    this.modManagement.getSkills()
    .subscribe(val => this.skills = val);
  }

  toggle(skillName){
    this.skills.forEach(function(obj){
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
}