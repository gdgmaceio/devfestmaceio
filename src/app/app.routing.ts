import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Layouts
import { DevfestLayoutComponent } from './layouts';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DevfestLayoutComponent,
    data: {
      title: 'DevFest Maceió 2018 - GDG'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
