import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeanService {

  private url:string = "http://localhost:4000/api/usuarios";

  constructor(private _http: HttpClient) { }

    // Peticion para listar todos los usuarios
    listarUsuarios() {
      return this._http.get(this.url);
    }

    // Peticion para agregar usuario
    agregarUsuario(usuario: any): Observable<any> {
      return this._http.post(`${this.url}`, usuario).pipe(map( (resp: any) => {
          return resp;
        })
      );
    }

    // Peticion para eliminar usuario
    eliminarUsuario(id: number) {
      return this._http.delete(`${this.url}/${id}`)
    }

}
