import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../types/car-type';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private baseUrl = 'http://localhost:3030/data/cars';
  headers: any = '';

  constructor(private http: HttpClient) {}
  setHeaders() {
    this.headers = new HttpHeaders().set(
      'X-Authorization',
      `${localStorage.getItem('accessToken')}`
    );
  }
  getLatest(): Observable<Car[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=3`
    );
  }
  addCar(carData: string): Observable<any> {
    this.setHeaders();
    return this.http.post(this.baseUrl, carData, {
      headers: this.headers,
    });
  }

  getAllCars(): Observable<Car[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getOneCar(carId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${carId}`);
  }

  editCar(carId: string, carData: any): Observable<any> {
    this.setHeaders();
    return this.http.put(`${this.baseUrl}/${carId}`, carData, {
      headers: this.headers,
    });
  }
  deleteCar(carId: string): Observable<void> {
    this.setHeaders();
    return this.http.delete<void>(`${this.baseUrl}/${carId}`, {
      headers: this.headers,
    });
  }
}
