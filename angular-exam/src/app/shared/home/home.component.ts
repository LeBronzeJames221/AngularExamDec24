import { Component } from '@angular/core';
import { CarService } from 'src/app/cars/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  latestCars: any[] = [];

  constructor(private carService: CarService) {}
}
