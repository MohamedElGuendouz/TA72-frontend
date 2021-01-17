import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

export class UserLogInStructure {
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

export class UserSignUpStructure {

  constructor(
    public username: string,
    public email: string,
    public password: string,
    public firstName: string,
    public lastName: string,
    public role: [string]
  ) { }

}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
  }

  authenticate(uname, upass) {
    return this.httpClient.post<UserLogInStructure>('http://localhost:8081/api/auth/signin', {
      'username': uname,
      'password': upass
    }).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', uname);
          let authString = 'Bearer ' + userData.accessToken;
          sessionStorage.setItem('bearerauth', authString);
          console.log(userData.id.toString())
          sessionStorage.setItem('id_user', userData.id.toString());

          return userData;
        }
      )

    );
  }

  createAccount(user) {
    return this.httpClient.post<UserSignUpStructure>('http://localhost:8081/api/auth/signup', {
      "username": user.username,
      "email": user.email,
      "password": user.password,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "role": user.role
    }
    ).pipe(
      map(
        userData => {
          this.router.navigate(['login']);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }
  logOut() {
    sessionStorage.removeItem('username')
    localStorage.removeItem('token');
  }
}
