import { NgModule } from '@angular/core';
import { SpeakerComponent } from './speaker.component';
import { SpeakerHeaderComponent } from './header/header.component';
import { SpeakerListComponent } from './list/list.component';
import { SpeakerMoreComponent } from './more/more.component';

@NgModule({
  declarations: [
    SpeakerComponent,
    SpeakerHeaderComponent,
    SpeakerListComponent,
    SpeakerMoreComponent
  ],
  exports: [
    SpeakerComponent
  ]
})
export class SpeakerModule {}
