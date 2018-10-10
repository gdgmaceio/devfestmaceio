import { NgModule } from '@angular/core';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';

import { ScheduleModule } from '../../components/schedule/schedule.module';

@NgModule({
	imports: [
		SchedulesRoutingModule,
		ScheduleModule
	],
	declarations: [SchedulesComponent]
})
export class SchedulesModule {}
