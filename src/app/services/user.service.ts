import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
//   {
//   providedIn: 'root'
// }
)

export class UserService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  signUp(userData:any){
    return this.http.post('localhost:2727/register',userData,this.httpOptions);
  }

  signIn(userData:any){
    return this.http.post('localhost:2727/login',userData,this.httpOptions);
  }

}
