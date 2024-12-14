import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { AuthService } from 'src/app/user/user.service';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css'],
})
export class MyCarsComponent implements OnInit {
  cars: any[] = [];
  userId: string | null = '';

  constructor(
    private carService: CarService,
    private userService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.userId = user?._id || null;
    });
    this.loadCars();
  }

  loadCars(): void {
    this.carService.getAllCars().subscribe((data) => {
      this.cars = data.filter((car) => car._ownerId === this.userId);
    });
  }
}
