import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WeAreBackComponent } from '../../components';
import { SpeakerComponent } from '../../components';
import { LocationComponent } from '../../components';
import { ForYouComponent } from '../../components';
import { LookingFarAwayComponent } from '../../components';


@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    WeAreBackComponent,
    SpeakerComponent,
    LocationComponent,
    ForYouComponent,
    LookingFarAwayComponent
  ]
})

export class HomeModule {
}
