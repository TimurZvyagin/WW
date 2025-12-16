import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () =>
      import('./home-group/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'mustang',
    loadComponent: () =>
      import('./mustang/mustang.component').then(
        (c) => c.MustangComponent
      ),
  },
  {
    path: 'lays',
    loadComponent: () =>
      import('./lays/lays.component').then((c) => c.LaysComponent),
  },

  {
    path: '**',
    redirectTo: 'home',
  },

];
