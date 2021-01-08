import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publication } from './entity/publication';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<Publication[]> {
    return this.httpClient.get<Publication[]>('/api/publications');
  }

}
