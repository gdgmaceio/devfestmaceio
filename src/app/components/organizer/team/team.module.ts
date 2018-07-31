import { NgModule } from '@angular/core';
import { OrganizerTeamComponent } from './team.component';
import { TeamHeaderComponent } from './header/header.component';
import { TeamProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    OrganizerTeamComponent,
    TeamHeaderComponent,
    TeamProfileComponent
  ],
  exports: [OrganizerTeamComponent]
})
export class OrganizerTeamModule {}
