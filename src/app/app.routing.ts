import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Layouts
import { DevfestLayoutComponent } from './layouts';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DevfestLayoutComponent,
    data: {
      title: 'DevFest Maceió 2018 - GDG'
    },
    children: [
      { path: 'inicio', loadChildren: './views/home/home.module#HomeModule' },
      { path: 'palestrantes', loadChildren: './views/speakers/speakers.module#SpeakersModule' },
      { path: 'organizadores', loadChildren: './views/organizers/organizers.module#OrganizersModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
