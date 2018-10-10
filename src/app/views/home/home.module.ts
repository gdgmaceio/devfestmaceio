import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { SpeakerModule } from '../../components/speaker/speaker.module';
import { HomeComponent } from './home.component';
import { WeAreBackComponent, LocationComponent, ForYouComponent, LookingFarAwayComponent, AboutComponent, TicketComponent } from '../../components';

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
    AboutComponent,
    TicketComponent,
  ]
})
export class HomeModule {}
