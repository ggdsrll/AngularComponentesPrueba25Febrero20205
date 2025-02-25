import { Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';

export const routes: Routes = [ // Add 'export' keyword here
  { path: 'componente1', component: Componente1Component },
  { path: 'componente2', component: Componente2Component },
  { path: '', redirectTo: '/componente1', pathMatch: 'full' },
];