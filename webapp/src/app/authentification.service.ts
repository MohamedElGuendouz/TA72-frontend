import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

export class User {
  id: number;
  username: string;
  email: string;
  roles: [string];
  accessToken: string;
  tokenType: string;

  constructor(
    public status: string
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  authenticate(uname, upass) {
    return this.httpClient.post<User>('http://localhost:8081/api/auth/signin',{
      'username':uname,
      'password': upass  
    }).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',uname);
        localStorage.setItem('token',userData.accessToken);
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    localStorage.removeItem('token');
  }
}
