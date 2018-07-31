import { NgModule } from '@angular/core';
import { OrganizersRoutingModule } from './organizers-routing.module';
import { OrganizersComponent } from './organizers.component';
import { OrganizerModule } from '../../components/organizer/organizer.module';

@NgModule({
  imports: [
    OrganizersRoutingModule,
    OrganizerModule
  ],
  declarations: [OrganizersComponent]
})
export class OrganizersModule {}
