import { NgModule } from '@angular/core';
import { CoreModule } from './../../core';
import { ScheduleComponent } from './schedule.component';
import { ScheduleListComponent } from './list/list.component';
import { ScheduleHeaderComponent } from './header/header.component';
import { ScheduleService } from './../../services/schedule.service';

@NgModule({
  imports: [CoreModule],
  declarations: [
    ScheduleComponent,
    ScheduleHeaderComponent,
    ScheduleListComponent,
  ],
  exports: [ScheduleComponent],
  providers: [ScheduleService]
})
export class ScheduleModule {}
