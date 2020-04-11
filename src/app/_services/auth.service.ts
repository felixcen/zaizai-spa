import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:44398/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'login', model)
        .pipe(
           map((response: any ) => {
              const user = response;
              if (user){
                localStorage.setItem('token', user.authToken);
              }else{
                console.log('unauthorized');
              }
           })
        );
  }
}


