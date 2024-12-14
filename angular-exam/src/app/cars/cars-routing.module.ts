import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GarageComponent } from './garage/garage.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { AuthGuard } from './auth/auth.guard';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { SearchPageComponent } from './search-page/search-page.component';
const routes: Routes = [
  { path: '', component: GarageComponent },
  {
    path: 'cars/search',
    component: SearchPageComponent,
  },
  {
    path: 'cars/create',
    component: CarCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cars/:id', component: CarDetailsComponent },
  {
    path: 'cars/:id/edit',
    component: CarEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-cars',
    component: MyCarsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsRoutingModule {}
