import { Routes } from '@angular/router';
import { HeroPageComponent } from './pages/hero/hero-page.component.js';
import { DragonballComponent } from './pages/dragonball/dragonball.component.js';

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
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
