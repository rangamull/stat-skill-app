import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SkillBlockComponent } from './skill-block/skill-block.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { ModManagementService } from './mod-management.service';
import { StatDialogComponent } from './stat-dialog/stat-dialog.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  declarations: [ AppComponent, HelloComponent, SkillBlockComponent, StatBlockComponent, StatDialogComponent ],
  entryComponents: [StatDialogComponent],
  bootstrap:    [ AppComponent ],
  providers: [ModManagementService]
})
export class AppModule { }
