import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Requerimiento } from 'src/app/domain/models/requerimiento';
import { RequerimientoGateway } from 'src/app/domain/models/requerimiento/gateway/requerimiento-gateway';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequerimientoApiService extends RequerimientoGateway {

  constructor(private http: HttpClient) { super() }

  getByID(id: number): Observable<Requerimiento> {
    return of(new Requerimiento(1, 1, 1, 'Swiss', 'Swiss Medical', true, 1, 1, 1, 1, 1, true, new Date));
  }

  save(requerimiento: Requerimiento): Observable<Requerimiento> {
    throw new Error('Method not implemented.');
  }

}
