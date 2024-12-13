import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export interface UserForAuth {
  _id: string;
  email: string;
  accessToken: string;
  password?: string;
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly BASE_URL = 'http://localhost:3030/users';
  private readonly TOKEN_KEY = 'accessToken';

  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  user$ = this.user$$.asObservable();

  constructor(private http: HttpClient) {
    this.loadUser();
  }

  private loadUser(): void {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (token) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      this.user$$.next(user);
    }
  }

  private saveUser(user: UserForAuth): void {
    localStorage.setItem(this.TOKEN_KEY, user.accessToken);
    delete user.password;
    localStorage.setItem('user', JSON.stringify(user));
    this.user$$.next(user);
  }

  private clearUser(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('user');
    this.user$$.next(null);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getCurrentUser() {
    return this.http;
  }

  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  login(email: string, password: string): Observable<UserForAuth> {
    return this.http
      .post<UserForAuth>(`${this.BASE_URL}/login`, {
        email,
        password,
      })
      .pipe(tap((user) => this.saveUser(user)));
  }

  register(email: string, password: string): Observable<UserForAuth> {
    return this.http
      .post<UserForAuth>(`${this.BASE_URL}/register`, { email, password })
      .pipe(tap((user) => this.saveUser(user)));
  }

  logout() {
    let token = this.getToken();
    let headers = new HttpHeaders();
    headers = headers.set('X-Authorization', `${token}`);

    return this.http
      .get<UserForAuth>(`${this.BASE_URL}/logout`, {
        headers: headers,
      })
      .pipe(tap(() => this.clearUser()));
  }
}
