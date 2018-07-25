import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import { WeAreBackComponent } from './../../components';


@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    WeAreBackComponent
  ]
})

export class HomeModule {
}
