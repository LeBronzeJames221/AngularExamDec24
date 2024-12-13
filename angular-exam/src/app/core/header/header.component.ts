import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserForAuth } from 'src/app/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user$: Observable<UserForAuth | null> = this.userService.user$;
  currentUser: string | null = '';

  constructor(private router: Router, private userService: AuthService) {}

  logout(): void {
    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Logout failed:', err);
      },
    });
  }
}
