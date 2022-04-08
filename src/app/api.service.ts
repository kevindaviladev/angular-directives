import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, zip } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  SW_API = 'https://swapi.dev/api';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.SW_API}/people/2`).pipe(
      map((res: any) => ({
        nombre: res.name,
        altura: `${res.height} metros`,
        ojos: (res.eye_color as String).toUpperCase(),
      }))
    );
  }

  getAllData() {
    return this.http.get(`${this.SW_API}/people/2`).pipe(
      mergeMap((res: any) => zip(of(res), this.http.get(res.species[0]))),
      map(([personaje, especie]: any[]) => ({
        ...personaje,
        especie: especie.name,
      }))
    );
  }
}
