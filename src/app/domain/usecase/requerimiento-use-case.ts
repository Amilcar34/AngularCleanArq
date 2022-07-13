import { Injectable } from "@angular/core";
import { Requerimiento } from "../models/requerimiento";
import { RequerimientoGateway } from "../models/requerimiento/gateway/requerimiento-gateway";


@Injectable({
    providedIn: 'root'
})
export class RequerimientoUseCase {

    constructor(private requerimientoGateway: RequerimientoGateway) { }

    save(requerimiento: Requerimiento) {

        this.save(requerimiento);
    }

    
}