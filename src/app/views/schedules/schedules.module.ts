import { NgModule } from '@angular/core';
import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';

@NgModule({
    imports: [
        SchedulesRoutingModule,
    ],
    declarations: [SchedulesComponent]
})
export class SchedulesModule {}
