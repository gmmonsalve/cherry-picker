import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateComponent } from './date/date.component';
import { DateCreatorComponent } from './date-creator/date-creator.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CherryButtonModule } from '../../ui/cherry-button/cherry-button.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DateComponent,
    DateCreatorComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CherryButtonModule
  ]
})
export class DashboardModule { }
