import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pump-listing',
    loadChildren: () =>
      import('./features/pump-listing/pump-listing-routing.module').then((m) => m.PumpListingRoutingModule),
  },
];
