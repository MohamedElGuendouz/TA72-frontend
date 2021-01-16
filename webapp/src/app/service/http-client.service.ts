import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Publication } from '../entity/publication';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  auth_token:string = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJNb01vIiwiaWF0IjoxNjEwNTU4NDc2LCJleHAiOjE2MTA2NDQ4NzZ9.npvYyYH-A-ZHLBFR07--pXSbPAkXNJXo1e1KZ_gqFXSTNtAH1BWp36fGUzj75-PW1aqQcE-mE2B5RuTBP25KaQ"

  constructor(
    private httpClient:HttpClient
  ) {

   }

  getPublications(): Observable<Publication[]>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token'",
      'Authorization': `Bearer ${this.auth_token}`
    })
    console.log("get Publications");
    return this.httpClient.get<Publication[]>('http://localhost:8081/api/discussion/list', { headers: headers });
  }
}
