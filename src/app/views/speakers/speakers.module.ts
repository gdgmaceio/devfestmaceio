import { NgModule } from '@angular/core';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakersComponent } from './speakers.component';
import { SpeakerComponent } from '../../components';

@NgModule({
  imports: [SpeakersRoutingModule],
  declarations: [SpeakersComponent, SpeakerComponent]
})
export class SpeakersModule {}
