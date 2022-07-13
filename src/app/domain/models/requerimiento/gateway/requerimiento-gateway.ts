import { Observable } from "rxjs";
import { Requerimiento } from "../../requerimiento";

export abstract class RequerimientoGateway {

    abstract getByID(id: number) : Observable<Requerimiento>
    
    abstract save(requerimiento: Requerimiento) : Observable<Requerimiento>
    

}