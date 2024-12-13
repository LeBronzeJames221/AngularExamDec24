import { Component, OnInit } from '@angular/core';

import { CarService } from 'src/app/cars/car.service';
import { Car } from 'src/app/types/car-type';

@Component({
  selector: 'app-latest-cars',
  templateUrl: './latest-cars.component.html',
  styleUrls: ['./latest-cars.component.css'],
})
export class LatestCarsComponent implements OnInit {
  latestCars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getLatest().subscribe((result) => {
      this.latestCars = result;
    });
  }
}
