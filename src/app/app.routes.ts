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
      import('./Mustang/mustang.component').then(
        (c) => c.MustangComponent
      ),
  },
  {
    path: 'lays',
    loadComponent: () =>
      import('./Lays/lays.component').then((c) => c.LaysComponent),
  },

  {
    path: '**',
    redirectTo: 'home',
  },

];
