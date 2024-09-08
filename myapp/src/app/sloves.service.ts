import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlovesService {
  private apiUrl = 'http://127.0.0.1:8000/sloves/';

  constructor(private http: HttpClient) { }

  // Method to create headers with the token
  private createAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getSloves(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.createAuthHeaders() });
  }

  getSloveById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`, { headers: this.createAuthHeaders() });
  }

  createSlove(slove: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, slove, { headers: this.createAuthHeaders() });
  }

  updateSlove(id: number, slove: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, slove, { headers: this.createAuthHeaders() });
  }

  deleteSlove(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`, { headers: this.createAuthHeaders() });
  }
}
