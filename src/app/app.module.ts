import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

// Import layouts
import { DevfestLayoutComponent } from './layouts';

const APP_LAYOUTS = [DevfestLayoutComponent];

// Import components
import {
  AppHeaderComponent,
  AppLogoComponent,
  AppNavigationComponent,
  AppFooterComponent,
  AppSidenavComponent
} from './components';

const APP_COMPONENTS = [
  AppHeaderComponent,
  AppLogoComponent,
  AppSidenavComponent,
  AppNavigationComponent,
  AppFooterComponent
];

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import core module
import { CoreModule } from './core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ...APP_LAYOUTS,
    ...APP_COMPONENTS,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
