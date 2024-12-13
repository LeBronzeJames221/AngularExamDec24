import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  error: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPass: ['', [Validators.required]],
    });
  }

  register(): void {
    const { email, password, confirmPass } = this.registerForm.value;

    if (password !== confirmPass) {
      this.error = `Passwords don't match`;
      return;
    }

    this.authService.register(email, password).subscribe({
      next: () => this.router.navigate(['/home']),
      error: (err) => {
        this.error =
          err.error.message || 'Registration failed. Please try again.';
      },
    });
  }
}
