import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SkillBlockComponent } from './skill-block/skill-block.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatBlockComponent } from './stat-block/stat-block.component';
import { ModManagementService } from './mod-management.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, HelloComponent, SkillBlockComponent, StatBlockComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ModManagementService]
})
export class AppModule { }
