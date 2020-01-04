import { Component, OnInit } from '@angular/core';

import { ModManagementService } from '../mod-management.service';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css']
})
export class StatBlockComponent implements OnInit {
  stats;
  modDisp = true;
  constructor(
    private modManagement: ModManagementService
  ) {
     }

  ngOnInit() {
    this.stats= this.modManagement.statsObj;
    console.log(this.stats)
  }

  toggMod(){
    this.modDisp=!this.modDisp;
  }
}