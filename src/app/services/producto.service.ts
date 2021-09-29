import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private readonly http: HttpClient) { }

  __getProductos() {
    return this.http.get('/api/producto/GetProductos');
  }
}
