import { NgModule } from '@angular/core';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';

import { SpeakerModule } from '../../components/speaker/speaker.module';

@NgModule({
  imports: [
    SpeakersRoutingModule,
    SpeakerModule
  ],
  declarations: [SpeakersComponent]
})
export class SpeakersModule {}
