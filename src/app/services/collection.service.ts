import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private readonly http: HttpClient) { }

  __getCollections() {
    return this.http.get('/api/collection/GetCollection');
  }
}