import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { GarageComponent } from './garage/garage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { MyCarsComponent } from './my-cars/my-cars.component';
import { SharedModule } from '../shared/shared.module';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    GarageComponent,
    CarDetailsComponent,
    CarEditComponent,
    CarCreateComponent,
    MyCarsComponent,
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
})
export class CarsModule {}
