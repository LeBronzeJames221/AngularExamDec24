import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  carForm: FormGroup;
  carId: string = '';
  creatorEmail: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private carService: CarService
  ) {
    this.carForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      price: [1, [Validators.required, Validators.min(1)]],
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.carId = this.route.snapshot.params['id'];
    this.carService.getOneCar(this.carId).subscribe((car) => {
      this.creatorEmail = car.creatorEmail;

      this.carForm.patchValue({
        brand: car.brand,
        model: car.model,
        price: car.price,
        imageUrl: car.imageUrl,
        description: car.description,
      });
    });
  }

  onEdit(): void {
    if (this.carForm.invalid) {
      return;
    }

    this.carService
      .editCar(this.carId, {
        ...this.carForm.value,
        creatorEmail: this.creatorEmail,
      })
      .subscribe({
        next: () => {
          this.router.navigate([`/cars/${this.carId}`]);
        },
      });
  }
}
