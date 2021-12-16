import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../interfaces/user';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeanService {

  url:any = environment.apiUrl;

  constructor(private _http: HttpClient) { }

    // Peticion para listar todos los usuarios
    listarUsuarios() {
      return this._http.get(this.url);
    }

    // Peticion para agregar usuario
    agregarUsuario(usuario: User): Observable<any> {
      return this._http.post(`${this.url}`, usuario).pipe(map( (resp: any) => {
          return resp;
        })
      );
    }

    // Peticion para editar usuario
    editarUsuario(id: number, usuario: User) {
      return this._http.put(`${this.url}/${id}`, usuario).pipe(map( (res:any) => {
        return res;
        })
      );
    }

    // Peticion para eliminar usuario
    eliminarUsuario(id: number) {
      return this._http.delete(`${this.url}/${id}`)
    }

}
