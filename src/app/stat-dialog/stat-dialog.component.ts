import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-stat-dialog',
  templateUrl: './stat-dialog.component.html',
  styleUrls: ['./stat-dialog.component.css']
})
export class StatDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<StatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}
  

  ngOnInit() {
  }

}