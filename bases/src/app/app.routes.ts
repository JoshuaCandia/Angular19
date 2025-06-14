import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter.component.js').then((m) => m.CounterComponent),
  },
  {
    path: 'hero',
    loadComponent: () =>
      import('./hero/hero-page.component').then((m) => m.HeroPageComponent),
  },
];
