import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Requerimiento } from "../models/requerimiento";
import { RequerimientoGateway } from "../models/requerimiento/gateway/requerimiento-gateway";


@Injectable({
    providedIn: 'root'
})
export class RequerimientoUseCase {

    constructor(private requerimientoGateway: RequerimientoGateway) { }

    save(requerimiento: Requerimiento) : Observable<Requerimiento> {
        throw new Error('Method not implemented.');
    }

    getByID(id : number) : Observable<Requerimiento> {
        return this.requerimientoGateway.getByID(id);
    }


    
}