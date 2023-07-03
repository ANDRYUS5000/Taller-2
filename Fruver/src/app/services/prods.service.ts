import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdsService {

  URL='http://localhost:3000'

  constructor(private http:HttpClient) { }

  obtenerProductos(){
    return this.http.get<any>(this.URL+'/productos')
  }

  obtenerProducto(id:string){
    return this.http.get<any>(this.URL+'/productos/'+id)
  }
}
