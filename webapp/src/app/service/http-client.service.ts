import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { UserSignUpStructure } from '../authentification.service';
import { Discussion, Publication } from '../entity/publication';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  public getDiscussions(): Observable<Discussion[]> {
    console.log("get Publications");
    return this.httpClient.get<Discussion[]>('http://localhost:8081/api/discussion/list');
  }
  public getDiscussionsById(id): Observable<Discussion> {
    console.log("get Publications by Id");
    return this.httpClient.get<Discussion>('http://localhost:8081/api/discussion/get?idDisc='+id);
  }

  public searchDiscussions(substring): Observable<Discussion[]> {
    console.log("get Publications with substring");
    return this.httpClient.get<Discussion[]>('http://localhost:8081/api/discussion/search?topic=' + substring);
  }

  public createDiscussion(discussion) {
    return this.httpClient.post<Discussion>("http://localhost:8081/api/discussion/register", discussion);
  }

  public getPublications(id): Observable<Publication[]> {
    console.log("get Publications");
    return this.httpClient.get<Publication[]>('http://localhost:8081/api/publication/list?idDisc='+id);
  }

  public createPublication(publication) {
    return this.httpClient.post<Publication>("http://localhost:8081/api/publication/register", publication);
  }

  public createUser(user) {
    return this.httpClient.post<UserSignUpStructure>("http://localhost:8081/api/auth/signup", user);
  }
}
