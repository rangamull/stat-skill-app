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
    this.getStats();
  }

  getStats(){
    this.modManagement.getStats()
    .subscribe(val => this.stats = val);
  }

  toggMod(){
    this.modDisp=!this.modDisp;
  }
}