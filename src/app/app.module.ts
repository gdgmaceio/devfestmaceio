import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

// Import layouts
import { DevfestLayoutComponent } from './layouts';

const APP_LAYOUTS = [DevfestLayoutComponent];

// Import components
import { AppHeaderComponent, AppLogoComponent, AppNavigationComponent } from './components';

const APP_COMPONENTS = [AppHeaderComponent];

// Import routing module
import { AppRoutingModule } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AppLogoComponent,
    AppNavigationComponent,
    ...APP_LAYOUTS,
    ...APP_COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
