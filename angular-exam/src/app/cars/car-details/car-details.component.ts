import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { AuthService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carId: string = '';
  carComments: any = '';
  car: any = {};
  userEmail: string | null = '';
  userId: string | null = '';
  ownerId: string | null = '';
  commentForm: FormGroup;
  creatorEmail: string | null = '';
  carLikes: number = 0;

  constructor(
    private carService: CarService,
    private fb: FormBuilder,
    private userService: AuthService,
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.carId = this.route.snapshot.params['id'];

    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
    this.fetchAllComments();

    this.userService.user$.subscribe((user) => {
      this.userId = user?._id || null;
    });

    this.carService.getOneCar(this.carId).subscribe((car) => {
      this.car = car;
      this.ownerId = car._ownerId;
      if (!this.creatorEmail) {
        this.creatorEmail = car.creatorEmail;
      }
    });
  }
  fetchAllComments(): void {
    this.commentService.getAllComments(this.carId).subscribe((c) => {
      this.carComments = c;
    });
  }
  addComment(): void {
    if (this.commentForm.valid) {
      this.userEmail = JSON.parse(localStorage.getItem('user') ?? '')
        .email.split('@')[0]
        .toUpperCase();
      const comment = this.commentForm.value.comment;

      this.commentService
        .addComment(this.carId, comment, this.userEmail ?? '')
        .subscribe(() => {
          this.fetchAllComments();
          this.commentForm.reset();
        });
    }
  }
  deleteComment(commentId: string): void {
    this.commentService.deleteComment(commentId).subscribe(() => {
      this.fetchAllComments();
    });
  }

  editCar(): void {
    this.router.navigate([`/cars/${this.carId}/edit`]);
  }

  deleteCar(): void {
    if (confirm(`Are you sure you want to delete ${this.car.brand}?`)) {
      this.carService.deleteCar(this.carId).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
  }

  likeCar(): void {
    if (this.carLikes === 0) {
      this.carLikes = 1;
    } else {
      this.carLikes = 0;
    }
  }
}
