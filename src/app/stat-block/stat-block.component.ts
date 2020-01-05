import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModManagementService } from '../mod-management.service';
import { StatDialogComponent } from '../stat-dialog/stat-dialog.component';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.css']
})
export class StatBlockComponent implements OnInit {
  stats;
  modDisp = true;
  constructor(
    private modManagement: ModManagementService,
    public dialog: MatDialog
  ) {
     }

  ngOnInit() {
    this.getStats();
  }

  getStats(){
    this.modManagement.getStats()
    .subscribe(val => this.stats = val);
  }

  updateStat(stat){
    let dialogRef = this.dialog.open(StatDialogComponent);

    dialogRef.afterClosed().subscribe(val => {
      if(val){
        this.modManagement.statUpdate(stat,val);
      }
  });
  }

  toggleProf(kind){
    this.modManagement.toggleStatProf(kind);
  }

  toggMod(){
    this.modDisp=!this.modDisp;
  }
}