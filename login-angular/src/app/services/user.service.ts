import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Injectable()
export class UserService {
  public url: string;
  public identity;
  public token;

  constructor(private _http: HttpClient) {
    this.url = global.url;
  }
  prueba() {
    return 'Hola mundoooooooo';
  }
  // Registrarse
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
  // Logearse
  signup(user, gettoken = null): Observable<any> {
    // Comprobar si llega el gettoken
    if (gettoken != null) {
      user.gettoken = gettoken;
    }
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'login', params, { headers: headers });
  }
  // Obtener datos del LocalStorage
  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity && identity != null && identity != 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }
  getToken() {
    let token = localStorage.getItem('token');
    if (token && token != null && token != 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  update(user): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());

    return this._http.put(this.url + 'user/update', params, {
      headers: headers,
    });
  }
}
