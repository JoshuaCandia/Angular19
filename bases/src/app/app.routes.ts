import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/Counter.component').then((m) => m.CounterComponent),
  },
];
