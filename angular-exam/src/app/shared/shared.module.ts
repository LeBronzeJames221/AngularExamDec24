import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LatestCarsComponent } from './home/latest-cars/latest-cars.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    HomeComponent,
    LatestCarsComponent,
    ErrorPageComponent,
    LoaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HomeComponent, LoaderComponent],
})
export class SharedModule {}
