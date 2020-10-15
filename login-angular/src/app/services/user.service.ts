import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = global.url;
  }
  prueba() {
    return 'Hola mundoooooooo';
  }
  register(user): Observable<any> {
    //convertir el objeto del usuario a un JSON String
    let params = JSON.stringify(user); //convertido a jsonString

    //Definir las cabeceras
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    //Hacer peticion Ajax
    return this._http.post(this.url + 'register', params, {
      headers: headers,
    });
  }
}
