import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pump-listing',
    loadComponent: () =>
      import('./features/pump-listing/pump-listing.component').then((m) => m.PumpListingComponent),
  },
  { path: '', redirectTo: 'pump-listing', pathMatch: 'full' },
];
