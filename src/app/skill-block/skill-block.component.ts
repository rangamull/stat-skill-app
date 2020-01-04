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
    this.modManagement.toggleSkillProf(skillName);
  }
}