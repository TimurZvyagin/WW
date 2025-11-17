import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home_group/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'mustang',
    loadComponent: () =>
      import('./home_group/Mustang/mustang.component').then(
        (c) => c.MustangComponent
      ),
  },
  {
    path: 'lays',
    loadComponent: () =>
      import('./home_group/Lays/lays.component').then((c) => c.LaysComponent),
  },
  {
    path: 'application',
    loadComponent: () =>
      import('./big-application/application.component').then(
        (c) => c.ApplicationComponent
      ),
  },

  {
    path: '**',
    redirectTo: 'home',
  },

];
