import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SpeakerModule } from '../../components/speaker/speaker.module';
import { HomeComponent } from './home.component';
import { WeAreBackComponent } from '../../components';
import { LocationComponent } from '../../components';
import { ForYouComponent } from '../../components';
import { LookingFarAwayComponent } from '../../components';
import { AboutComponent } from '../../components';

@NgModule({
  imports: [
    HomeRoutingModule,
    SpeakerModule
  ],
  declarations: [
    HomeComponent,
    WeAreBackComponent,
    LocationComponent,
    ForYouComponent,
    LookingFarAwayComponent,
    AboutComponent
  ]
})
export class HomeModule {}
