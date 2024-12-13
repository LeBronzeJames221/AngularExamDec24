import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css'],
})
export class CarCreateComponent implements OnInit {
  car: any = {
    brand: '',
    model: '',
    price: '',
    imageUrl: '',
    description: '',
  };
  carForm: FormGroup;
  creatorEmail: string | null = '';

  constructor(
    private carService: CarService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  createCar(): void {
    if (this.carForm.valid) {
      this.creatorEmail = JSON.parse(localStorage.getItem('user') ?? '')
        .email.split('@')[0]
        .toUpperCase();

      const carData = {
        ...this.carForm.value,
        creatorEmail: this.creatorEmail,
      };
      this.carService.addCar(carData).subscribe(() => {
        this.router.navigate(['/cars']);
      });
    }
  }
}
