import { NgModule } from '@angular/core';
import { CoreModule } from './../../core';
import { SpeakerComponent } from './speaker.component';
import { SpeakerHeaderComponent } from './header/header.component';
import { SpeakerListComponent } from './list/list.component';
import { SpeakerMoreComponent } from './more/more.component';
import { SpeakerService } from './../../services/speaker.service';

@NgModule({
  imports: [CoreModule],
  declarations: [
    SpeakerComponent,
    SpeakerHeaderComponent,
    SpeakerListComponent,
    SpeakerMoreComponent
  ],
  exports: [SpeakerComponent],
  providers: [SpeakerService]
})
export class SpeakerModule {}
