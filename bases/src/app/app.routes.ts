import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/counter/counter.component.js').then(
        (m) => m.CounterComponent
      ),
  },
  {
    path: 'hero',
    loadComponent: () =>
      import('./pages/hero/hero-page.component.js').then(
        (m) => m.HeroPageComponent
      ),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
