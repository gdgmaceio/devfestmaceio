import { NgModule } from '@angular/core';
import { ScheduleComponent } from './schedule.component';
import { ScheduleListComponent } from './list/list.component';
import { ScheduleHeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleHeaderComponent,
    ScheduleListComponent,
  ],
  exports: [ScheduleComponent]
})
export class ScheduleModule {}
