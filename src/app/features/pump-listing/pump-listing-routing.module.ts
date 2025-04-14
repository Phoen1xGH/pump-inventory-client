import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PumpListingComponent } from './pump-listing.component';

const routes: Routes = [{ path: '', component: PumpListingComponent }]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PumpListingRoutingModule { }
