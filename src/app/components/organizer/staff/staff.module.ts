import { NgModule } from '@angular/core';
import { OrganizerStaffComponent } from './staff.component';
import { StaffHeaderComponent } from './header/header.component';
import { StaffListComponent } from './list/list.component';

@NgModule({
  declarations: [
    OrganizerStaffComponent,
    StaffHeaderComponent,
    StaffListComponent
  ],
  exports: [OrganizerStaffComponent]
})
export class OrganizerStaffModule {}
