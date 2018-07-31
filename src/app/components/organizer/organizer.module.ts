import { NgModule } from '@angular/core';
import { OrganizerComponent } from './organizer.component';
import { OrganizerTeamModule } from './team/team.module';
import { OrganizerStaffModule } from './staff/staff.module';

@NgModule({
  imports: [
    OrganizerTeamModule,
    OrganizerStaffModule
  ],
  declarations: [
    OrganizerComponent
  ],
  exports: [OrganizerComponent]
})
export class OrganizerModule {}
