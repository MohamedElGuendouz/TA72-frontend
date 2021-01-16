import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('bearerauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('bearerauth')
        }
      })
    }

    return next.handle(req);

  }
}