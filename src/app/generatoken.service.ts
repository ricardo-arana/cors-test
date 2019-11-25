import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneratokenService {

  constructor(private http: HttpClient) { }

  generatoken(url: string, body: any) {
    return this.http.post(url, body);
  }
}
