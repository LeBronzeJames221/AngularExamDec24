import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user.service';
import { CarService } from 'src/app/cars/car.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  userCars: any[] = [];
  constructor(
    private userService: AuthService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      this.user = user;
      this.user.username = this.user.email.split('@')[0];
    });
  }
}
