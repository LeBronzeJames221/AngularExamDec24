import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly BASE_URL = 'http://localhost:3030/data/comments';
  headers: any = '';

  constructor(private http: HttpClient) {}
  setHeaders() {
    this.headers = new HttpHeaders().set(
      'X-Authorization',
      `${localStorage.getItem('accessToken')}`
    );
  }
  getAllComments(carId: string): Observable<any[]> {
    return this.http.get<any>(`${this.BASE_URL}?where=carId%3D%22${carId}%22`);
  }

  addComment(
    carId: string,
    comment: string,
    ownerEmail: string
  ): Observable<any> {
    this.setHeaders();
    return this.http.post(
      `${this.BASE_URL}`,
      { carId, comment, ownerEmail },
      {
        headers: this.headers,
      }
    );
  }

  deleteComment(commentId: string): Observable<void> {
    this.setHeaders();
    return this.http.delete<any>(`${this.BASE_URL}/${commentId}`, {
      headers: this.headers,
    });
  }
}
